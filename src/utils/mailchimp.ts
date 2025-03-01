/**
 * Add a subscriber to a Mailchimp audience via our Netlify Function
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

    // Determine the API URL based on environment
    // In production, Netlify will handle the redirect from /api/subscribe to /.netlify/functions/subscribe
    const apiUrl = import.meta.env.DEV
      ? "http://localhost:8888/.netlify/functions/subscribe" // Netlify dev server port
      : "/api/subscribe"; // Will be redirected to /.netlify/functions/subscribe in production

    // Call our Netlify Function
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        tags,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to add subscriber");
    }

    console.log("Successfully added subscriber to Mailchimp:", result.data?.id);
    return result;
  } catch (error) {
    console.error("Error adding subscriber to Mailchimp:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
