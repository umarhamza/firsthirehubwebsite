import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer';
import CenteredLogoHeader from "./components/CenteredLogoHeader"
import ABTestRouter from './components/ABTestRouter';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ThankYou from './pages/ThankYou';

// import LandingPage from './pages/LandingPage';
// import ThankYou from './pages/ThankYou';
// import LandingPageCallVersion from './pages/LandingPageCallVersion';

// Component to conditionally render header
const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CenteredLogoHeader />
      <main className="flex-grow">
        <Routes>
          {/* A/B Testing Route */}
          <Route path="/" element={<ABTestRouter />} />
          
          {/* Direct Routes for Testing */}
          {/* <Route path="/guide" element={<LandingPage />} />
          <Route path="/call" element={<LandingPageCallVersion />} />*/}
          <Route path="/thank-you" element={<ThankYou />} /> 
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;