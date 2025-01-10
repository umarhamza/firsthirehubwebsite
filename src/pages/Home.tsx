import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Contact from '../components/Contact';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
        <Hero 
            heading="Find Your Perfect <span class='text-blue-600'>First Hire</span>"
            description="We help businesses grow by identifying the right talent, crafting perfect roles, and providing the training needed for success."
            buttonOneLabel="Get Started"
            buttonTwoLabel="Learn More"
            buttonOneClickHandler={() => scrollToSection('contact')}
            buttonTwoClickHandler={() => scrollToSection('services')}
            buttonOneArrow={ArrowRight}
        />
        <Services />
        <Process />
        <Contact />
    </>
  );
};

export default Home;
