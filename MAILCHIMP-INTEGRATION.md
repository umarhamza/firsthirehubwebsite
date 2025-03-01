# Mailchimp Integration

This document outlines the implementation of Mailchimp for email capture forms in the First Hire Hub website.

## Overview

- All email capture forms now use Mailchimp API for subscriber management
- The contact form continues to use EmailJS for direct message delivery
- Mailchimp credentials are stored in the `.env` file

## Implementation Details

### Environment Variables

The following environment variables are required for Mailchimp integration:

```
VITE_MAILCHIMP_API_KEY=your-api-key
VITE_MAILCHIMP_AUDIENCE_ID=your-audience-id
```

### Files Modified

1. `src/utils/mailchimp.ts` - New utility file for Mailchimp API integration
2. `src/types/mailchimp.d.ts` - TypeScript declaration file for Mailchimp package
3. `src/components/EmailCaptureForm.tsx` - Updated to use Mailchimp instead of EmailJS
4. `src/components/ContactForm.tsx` - Added documentation comment to clarify EmailJS usage

### Functionality

- When a user submits any capture form (PDF, call, or community), they are added to the Mailchimp audience
- Each form type adds specific tags to the subscriber for segmentation
- If a subscriber already exists, their information is updated and new tags are added
- The contact form continues to use EmailJS for direct message delivery

## Error Handling

The Mailchimp integration includes robust error handling:

- Detailed error logging for debugging
- Graceful handling of "Member Exists" errors by updating existing subscribers
- User-friendly error messages displayed in the UI

## Future Improvements

Potential future improvements to consider:

1. Add GDPR compliance fields and double opt-in functionality
2. Implement more detailed subscriber segmentation based on user behavior
3. Add analytics tracking for form submissions
4. Create an admin dashboard for monitoring subscriber growth 