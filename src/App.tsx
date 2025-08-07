import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0b] text-white overflow-x-hidden">
      <Hero />
      <Services />
      <Features />
      <TechStack />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;