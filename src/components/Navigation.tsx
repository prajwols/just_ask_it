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
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/70 dark:bg-black/95 dark:border-[#8F94FF]/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Just Ask IT LightBlue.svg"
              alt="Just Ask IT"
              className="h-16 sm:h-20 md:h-24 w-auto transition-all duration-300"
            />
          </div>

          {/* Book Discovery Call Button */}
          <div className="flex items-center">
            <a
              href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-300 bg-slate-950 text-white hover:bg-slate-800 shadow-lg font-title text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(15,23,42,0.15)] dark:bg-white dark:text-black dark:hover:bg-gray-100 dark:hover:shadow-[0_0_20px_rgba(143,148,255,0.3)]"
            >
              <span className="mr-1.5 sm:mr-2">Book Discovery Call</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
