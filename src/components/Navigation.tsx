import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
      style={{
        background: isScrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
        borderBottom: isScrolled ? "1px solid" : "none",
        borderImage: isScrolled
          ? "linear-gradient(to right, transparent 0%, rgba(12, 148, 255, 0.3) 20%, rgba(143, 148, 255, 0.5) 50%, rgba(143, 148, 255, 0.3) 80%, transparent 100%) 1"
          : "none",
      }}
    >
      <div className="max-w-[84rem] mx-auto px-3 sm:px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center isolate">
            <img
              src="/main.png"
              alt="Just Ask IT"
              className="h-9 sm:h-12 md:h-16 md:pt-4 lg:h-20 w-auto object-contain mix-blend-multiply transition-all duration-300 drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
              loading="eager"
              draggable={false}
            />
          </div>

          {/* Navigation Links and Button */}
          <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-10">
            <div className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8">
              <a href="#" className="font-manrope text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white hover:text-[#8f94ff] transition-colors">
                AI Solutions
              </a>
              <a href="#" className="font-manrope text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white hover:text-[#8f94ff] transition-colors">
                Digital Solutions
              </a>
            </div>
            
            <a
              href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full font-semibold transition-all duration-300 bg-white text-black hover:bg-gray-100 shadow-lg font-title text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] hover:shadow-[0_0_20px_rgba(143,148,255,0.3)]"
            >
              <span className="mr-1 sm:mr-1.5 md:mr-2">Book Call</span>
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 transition-all duration-300 text-black group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
