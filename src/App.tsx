import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BookingSection from "./components/BookingSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="animated-modern-gradient text-white overflow-x-hidden min-h-screen">
      <Navigation />
      <Hero />
      <VideoSection />
      <Services />
      {/* <Features /> */}
      {/* <TechStack /> */}
      {/* <CaseStudies /> */}
      <Testimonials />
      <BookingSection />
      <FAQ />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
