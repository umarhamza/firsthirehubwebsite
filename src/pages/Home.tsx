import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
        <Hero />
        <Services />
        <Process />
        <Contact />
    </>
  );
};

export default Home;
