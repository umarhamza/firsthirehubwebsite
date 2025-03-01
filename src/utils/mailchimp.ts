import mailchimp from "@mailchimp/mailchimp_marketing";
import crypto from "crypto";

// Initialize the Mailchimp client
mailchimp.setConfig({
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
  server: "us16", // This is extracted from the API key (us16)
});

/**
 * Add a subscriber to a Mailchimp audience
 * @param email - The subscriber's email address
 * @param name - The subscriber's name
 * @param tags - Optional tags to add to the subscriber
 * @returns Promise with the API response
 */
export const addSubscriberToMailchimp = async (
  email: string,
  name: string,
  tags: string[] = []
) => {
  try {
    console.log(`Adding subscriber to Mailchimp: ${email} (${name})`);

    // Split the name into first and last name
    const nameParts = name.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Add subscriber to list
    const response = await mailchimp.lists.addListMember(
      import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID,
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
    return { success: true, data: response };
  } catch (error: unknown) {
    // Handle specific Mailchimp errors
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      error.response &&
      typeof error.response === "object" &&
      "body" in error.response
    ) {
      const errorResponse = error.response as {
        body: { title?: string; detail?: string; status?: number };
      };
      const { title, detail, status } = errorResponse.body;

      // Handle member already exists error (status 400 with specific title)
      if (status === 400 && title === "Member Exists") {
        console.log(`Subscriber ${email} already exists in Mailchimp list`);

        try {
          // Split the name into first and last name again for the update
          const nameParts = name.split(" ");
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";

          // Update the existing member's tags instead
          const subscriberHash = crypto
            .createHash("md5")
            .update(email.toLowerCase())
            .digest("hex");

          // Get the member to check current tags
          const member = await mailchimp.lists.getListMember(
            import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID,
            subscriberHash
          );

          // Update the member with new tags (adding to existing ones)
          const currentTags =
            member.tags?.map((tag: { name: string }) => tag.name) || [];
          const uniqueTags = [...new Set([...currentTags, ...tags])];

          await mailchimp.lists.updateListMember(
            import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID,
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
            success: true,
            data: { id: subscriberHash, status: "updated" },
          };
        } catch (updateError) {
          console.error("Error updating existing subscriber:", updateError);
          return {
            success: false,
            error: "Error updating existing subscriber information",
          };
        }
      }

      console.error("Mailchimp API error:", { title, detail, status });
      return {
        success: false,
        error: detail || title || "Unknown Mailchimp API error",
      };
    }

    console.error("Error adding subscriber to Mailchimp:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
