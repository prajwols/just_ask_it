import React from "react";
import { Calendar, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section
      className="py-24 px-6 relative section-modern-gradient"
      style={{
        background:
          "radial-gradient(circle at center, #000000 10%, #000000 30%, #000000 60%, #0033CC 135%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r  rounded-3xl blur-3xl"></div>

          <div className="relative modern-gradient-card rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-title">
              <span className="text-white">
                Ready to Transform Your Business?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-content">
              Join hundreds of companies already using our AI solutions to drive
              growth, reduce costs, and stay ahead of the competition. Let's
              discuss your project.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white font-content mb-12">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#2a6dd1] rounded-full mr-2"></div>
                Money-Back Guarantee
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#2a6dd1] rounded-full mr-2"></div>
                100% confidentiality guaranteed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#2a6dd1] rounded-full mr-2"></div>
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
