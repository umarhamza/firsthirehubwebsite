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