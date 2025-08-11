import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Transform Your Business with AI That Actually Works";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #0a0a0a 15%, #001a66 25%, #0033cc 35%, #001a66 45%, #0a0a0a 55%, #000000 100%)",
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#8F94FF] rounded-full animate-pulse opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full modern-gradient-card mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-[#8F94FF]" />
            <span className="text-sm text-white font-content">
              Next-Generation AI Solutions
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-title">
          <span className="text-white">{displayText}</span>
          <span className="animate-pulse text-[#8F94FF]">|</span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-content">
          From concept to deployment, we deliver AI solutions that drive real
          business results. Join 500+ companies already transforming with our
          technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 modern-gradient-button rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(143,148,255,0.4)] hover:scale-105 flex items-center font-content"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Consultation
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0033CC] to-[#8F94FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>

          <button className="group px-8 py-4 border-2 border-[#8F94FF]/40 rounded-full font-semibold text-[#8F94FF] transition-all duration-300 hover:border-[#8F94FF]/60 hover:shadow-[0_0_20px_rgba(143,148,255,0.25)] flex items-center font-content">
            View Our Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-[#8F94FF] mb-2 group-hover:scale-110 transition-transform duration-300 font-title">
                {stat.number}
              </div>
              <div className="text-white font-content">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8F94FF]/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#8F94FF] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
