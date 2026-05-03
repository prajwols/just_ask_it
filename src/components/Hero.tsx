import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const staticText = "Transform Your Business with ";
  const animatedText = "AI, Software, and Websites That Work";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentIndex < animatedText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + animatedText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Hide cursor after animation completes
      setTimeout(() => setShowCursor(false), 500);
    }
  }, [currentIndex, animatedText]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 dark:bg-[linear-gradient(135deg,#000000_0%,#0a0a0a_15%,#001a66_25%,#0033cc_35%,#001a66_45%,#0a0a0a_55%,#000000_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-100 to-transparent dark:hidden" />
      <div className="absolute left-1/2 top-28 h-[420px] w-[min(980px,90vw)] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl dark:hidden" />

      {/* Animated particles */}
      <div className="absolute inset-0 hidden dark:block">
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
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-200 bg-white/80 shadow-sm mb-4 md:mb-6 dark:border-[#8F94FF]/10 dark:bg-white/5 dark:backdrop-blur-md">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-[#0033CC] dark:text-[#8F94FF]" />
            <span className="text-xs md:text-sm text-slate-700 font-content dark:text-white">
              AI, software, and website solutions
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight font-title">
          <span className="text-slate-950 dark:text-white">{staticText}</span>
          <span className="text-[#0033CC] dark:text-[#8F94FF]">{displayText}</span>
          {showCursor && (
            <span className="animate-pulse text-[#0033CC] dark:text-[#8F94FF]">|</span>
          )}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-content dark:text-white">
          From concept to deployment, we deliver AI, software, and website
          solutions that drive real business results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <a
            href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-slate-950 rounded-full font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-[0_14px_30px_rgba(15,23,42,0.18)] hover:scale-105 flex items-center font-content text-sm md:text-base dark:bg-gradient-to-r dark:from-[#0033CC] dark:to-[#8F94FF] dark:hover:shadow-[0_0_30px_rgba(143,148,255,0.4)]"
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
            Book Free Consultation
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0033CC] to-[#8F94FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>

          <button
            onClick={() => scrollToSection("services-section")}
            className="group px-6 py-3 md:px-8 md:py-4 border border-slate-300 rounded-full font-semibold text-slate-900 transition-all duration-300 hover:border-slate-500 hover:bg-slate-50 flex items-center font-content text-sm md:text-base dark:border-[#8F94FF]/40 dark:text-[#8F94FF] dark:hover:border-[#8F94FF]/60 dark:hover:shadow-[0_0_20px_rgba(143,148,255,0.25)] dark:hover:bg-transparent"
          >
            View Our Services
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20 max-w-4xl mx-auto">
          {[
            { number: "40+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0033CC] mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 font-title dark:text-[#8F94FF]">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-600 font-content dark:text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center dark:border-[#8F94FF]/40">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse dark:bg-[#8F94FF]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
