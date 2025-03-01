# First Hire Hub Website

This repository contains the First Hire Hub website, built with React, TypeScript, and Tailwind CSS.

## Landing Page Setup

The landing page has been updated with the following features:

1. **Centered Logo Header**
   - The logo is now centered at the top of the page.

2. **Hero Section**
   - Features a strong value proposition and a CTA button that opens a modal for capturing visitor information.

3. **Video Integration**
   - To add a video to the landing page:
     - Place your video file in the `public/videos/` directory with the name `business-clarity-guide.mp4`
     - Alternatively, update the video source path in `src/pages/LandingPage.tsx`

4. **Benefits Section**
   - Highlights three key benefits with styled backgrounds.

5. **Call Booking & Community Sections**
   - Both sections now use modals to capture visitor information before redirecting to the respective services.

## Modal Forms

All CTAs on the page (PDF download, call booking, and community join) now include modal forms that capture the visitor's name and email before proceeding.

## Mailchimp Integration

The website now integrates with Mailchimp for email capture forms. Due to CORS restrictions, a server-side component is required:

1. **Server Setup**
   - For local development, navigate to the `server` directory
   - Follow the instructions in the server's README.md to set up the API server
   - This server acts as a proxy for Mailchimp API calls to avoid CORS issues

2. **Development Workflow**
   - Start the API server: `cd server && npm run dev`
   - Start the frontend: `npm run dev`
   - The frontend will automatically connect to the local API server

3. **Production Deployment**
   - For Netlify deployment, see the [Netlify Deployment Guide](NETLIFY-DEPLOYMENT.md)
   - For other hosting platforms, deploy the API server separately and update the API URL in `src/utils/mailchimp.ts`

## Netlify Deployment

This project is configured for easy deployment to Netlify, including serverless functions for the Mailchimp integration:

1. **Netlify Functions**
   - The `netlify/functions` directory contains serverless functions for the Mailchimp integration
   - These functions replace the Express server for production deployment on Netlify

2. **Local Development with Netlify**
   - Run `npm run netlify:dev` to test the site with Netlify Functions locally

For detailed deployment instructions, see the [Netlify Deployment Guide](NETLIFY-DEPLOYMENT.md).

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Building for Production

To build the site for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/umarhamza/firsthirehubwebsite)