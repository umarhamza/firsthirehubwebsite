import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER || 'us16',
});

export const handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
      ? 'https://firsthirehub.com' 
      : '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Preflight call successful' }),
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  try {
    const { email, name, tags = [] } = JSON.parse(event.body);
    
    if (!email || !name) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: 'Email and name are required' 
        }),
      };
    }

    console.log(`Adding subscriber to Mailchimp: ${email} (${name})`);

    // Split the name into first and last name
    const nameParts = name.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    try {
      // Add subscriber to list
      const response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
          tags: tags,
        }
      );

      console.log("Successfully added subscriber to Mailchimp:", response.id);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, data: response }),
      };
    } catch (error) {
      // Handle specific Mailchimp errors
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "body" in error.response
      ) {
        const errorResponse = error.response;
        const { title, detail, status } = errorResponse.body;

        // Handle member already exists error (status 400 with specific title)
        if (status === 400 && title === "Member Exists") {
          console.log(`Subscriber ${email} already exists in Mailchimp list`);

          try {
            // Update the existing member's tags instead
            const subscriberHash = crypto
              .createHash("md5")
              .update(email.toLowerCase())
              .digest("hex");

            // Get the member to check current tags
            const member = await mailchimp.lists.getListMember(
              process.env.MAILCHIMP_AUDIENCE_ID,
              subscriberHash
            );

            // Update the member with new tags (adding to existing ones)
            const currentTags =
              member.tags?.map((tag) => tag.name) || [];
            const uniqueTags = [...new Set([...currentTags, ...tags])];

            await mailchimp.lists.updateListMember(
              process.env.MAILCHIMP_AUDIENCE_ID,
              subscriberHash,
              {
                merge_fields: {
                  FNAME: firstName,
                  LNAME: lastName,
                },
                tags: uniqueTags,
              }
            );

            console.log(`Updated existing subscriber ${email} with new tags`);
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({
                success: true,
                data: { id: subscriberHash, status: "updated" },
              }),
            };
          } catch (updateError) {
            console.error("Error updating existing subscriber:", updateError);
            return {
              statusCode: 500,
              headers,
              body: JSON.stringify({
                success: false,
                error: "Error updating existing subscriber information",
              }),
            };
          }
        }

        console.error("Mailchimp API error:", { title, detail, status });
        return {
          statusCode: status || 500,
          headers,
          body: JSON.stringify({
            success: false,
            error: detail || title || "Unknown Mailchimp API error",
          }),
        };
      }

      console.error("Error adding subscriber to Mailchimp:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : "Unknown error occurred",
        }),
      };
    }
  } catch (error) {
    console.error("Server error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Server error processing request' 
      }),
    };
  }
}; 