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
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Just Ask IT LightBlue.svg"
              alt="Just Ask IT"
              className="h-24 w-auto transition-all duration-300"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Book Discovery Call Button */}
          <div className="flex items-center">
            <a
              href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 bg-white text-black hover:bg-gray-100 shadow-lg font-title hover:shadow-[0_0_20px_rgba(143,148,255,0.3)]"
            >
              <span className="mr-2">Book Discovery Call</span>
              <ExternalLink className="w-4 h-4 transition-all duration-300 text-black group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
