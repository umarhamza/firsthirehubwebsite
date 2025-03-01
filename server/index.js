import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER || 'us16', // This is extracted from the API key (us16)
});

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://firsthirehub.com' 
    : 'http://localhost:5173', // Default Vite dev server port
  methods: ['POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Mailchimp subscriber endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email, name, tags = [] } = req.body;
  
  if (!email || !name) {
    return res.status(400).json({ 
      success: false, 
      error: 'Email and name are required' 
    });
  }

  try {
    console.log(`Adding subscriber to Mailchimp: ${email} (${name})`);

    // Split the name into first and last name
    const nameParts = name.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

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
    return res.status(200).json({ success: true, data: response });
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
          return res.status(200).json({
            success: true,
            data: { id: subscriberHash, status: "updated" },
          });
        } catch (updateError) {
          console.error("Error updating existing subscriber:", updateError);
          return res.status(500).json({
            success: false,
            error: "Error updating existing subscriber information",
          });
        }
      }

      console.error("Mailchimp API error:", { title, detail, status });
      return res.status(status || 500).json({
        success: false,
        error: detail || title || "Unknown Mailchimp API error",
      });
    }

    console.error("Error adding subscriber to Mailchimp:", error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 