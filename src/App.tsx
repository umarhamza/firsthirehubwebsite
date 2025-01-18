import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>

    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>        
      </main>
      <Footer />
    </div>
    </Router>

  );
}

export default App;