import React, { useEffect, useState } from 'react';
import LandingPage from '../pages/LandingPage';
import LandingPageCallVersion from '../pages/LandingPageCallVersion';

// A/B test versions
const AB_TEST_VERSIONS = ['guide', 'call'] as const;
type ABTestVersion = typeof AB_TEST_VERSIONS[number];

// Cookie name for storing the A/B test version
const AB_TEST_COOKIE_NAME = 'guide';

const ABTestRouter: React.FC = () => {
  const [version, setVersion] = useState<ABTestVersion | null>(null);

  useEffect(() => {
    // Check if user already has a version assigned (from cookie)
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
      return null;
    };

    // Set a cookie with the version
    const setCookie = (name: string, value: string, days: number = 30) => {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `; expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}${expires}; path=/`;
    };

    // Get existing version from cookie or assign a new one
    let abTestVersion = getCookie(AB_TEST_COOKIE_NAME) as ABTestVersion | null;
    
    // If no version is assigned, randomly assign one
    if (!abTestVersion || !AB_TEST_VERSIONS.includes(abTestVersion as ABTestVersion)) {
      // Random assignment (50/50 split)
      abTestVersion = Math.random() < 0.5 ? 'guide' : 'call';
      setCookie(AB_TEST_COOKIE_NAME, abTestVersion);
    }

    // Set the version in state
    setVersion(abTestVersion);

    // Track the version for analytics
    if (typeof window !== 'undefined') {
      console.log(`A/B Test Version: ${abTestVersion}`);
      // Add your analytics tracking code here
      // Example: window.gtag('event', 'ab_test_assignment', { version: abTestVersion });
    }
  }, []);

  // Show loading state while determining version
  if (!version) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Render the appropriate landing page based on the version
  return version === 'guide' ? <LandingPage /> : <LandingPageCallVersion />;
};

export default ABTestRouter; 