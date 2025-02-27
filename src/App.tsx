import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ThankYou from './pages/ThankYou';
import CenteredLogoHeader from "./components/CenteredLogoHeader"

// Component to conditionally render header
const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CenteredLogoHeader />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
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