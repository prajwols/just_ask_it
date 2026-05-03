import React from "react";
import { Calendar, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section
      className="relative bg-white px-6 py-24 dark:bg-[radial-gradient(circle_at_center,#000000_10%,#000000_30%,#000000_60%,#0033CC_135%)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r  rounded-3xl blur-3xl"></div>

          <div className="relative rounded-3xl border border-slate-200 bg-slate-950 p-8 text-center shadow-2xl md:p-16 dark:border-[#8F94FF]/10 dark:bg-white/5 dark:backdrop-blur-md">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-title">
              <span className="text-white">
                Ready to Transform Your Business?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-content">
              Join companies using our AI, software, and website solutions to
              drive growth, reduce costs, and stay ahead of the competition.
              Let's discuss your project.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white font-content mb-12">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#8F94FF] rounded-full mr-2 dark:bg-[#2a6dd1]"></div>
                Money-Back Guarantee
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#8F94FF] rounded-full mr-2 dark:bg-[#2a6dd1]"></div>
                100% confidentiality guaranteed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#8F94FF] rounded-full mr-2 dark:bg-[#2a6dd1]"></div>
                Free consultation & proposal
              </div>
            </div>

            {/* Book Discovery Call Button */}
            <a
              href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-black hover:bg-gray-100 shadow-lg font-title hover:shadow-[0_0_20px_rgba(143,148,255,0.3)] mx-auto w-fit"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span className="mr-2">Book Discovery Call</span>
              <ExternalLink className="w-4 h-4 transition-all duration-300 text-black group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
