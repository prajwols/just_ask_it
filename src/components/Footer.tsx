import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0b] to-[#000000] border-t border-[#8F94FF]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8F94FF] to-[#0033CC] rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl font-title">
                  AI
                </span>
              </div>
              <span className="text-white text-xl font-bold font-title">
                Solutions
              </span>
            </div>
            <p className="text-white mb-6 leading-relaxed font-content">
              Transforming businesses with cutting-edge AI solutions. We deliver
              results-driven technology that scales with your growth.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]" },
                { icon: Linkedin, href: "#", color: "hover:text-[#0077B5]" },
                { icon: Github, href: "#", color: "hover:text-[#333]" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-[#1a1a2e] border border-[#8F94FF]/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:border-[#8F94FF]/40 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-title">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Machine Learning",
                "Conversational AI",
                "Data Intelligence",
                "Business Analytics",
                "AI Security",
                "Process Automation",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white hover:text-[#8F94FF] transition-colors duration-300 font-content"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-title">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Case Studies",
                "Careers",
                "Partners",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white hover:text-[#8F94FF] transition-colors duration-300 font-content"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-title">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#8F94FF] mr-3 flex-shrink-0" />
                <a
                  href="mailto:hello@aisolutions.com"
                  className="text-white hover:text-[#8F94FF] transition-colors duration-300 font-content"
                >
                  hello@aisolutions.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#8F94FF] mr-3 flex-shrink-0" />
                <a
                  href="tel:+1-555-0123"
                  className="text-white hover:text-[#8F94FF] transition-colors duration-300 font-content"
                >
                  +1 (555) 0123-456
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#8F94FF] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-white font-content">
                  123 AI Street
                  <br />
                  Tech District, SF 94105
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8F94FF] to-[#0033CC] rounded-lg text-white font-semibold hover:shadow-[0_0_20px_rgba(143,148,255,0.4)] hover:scale-105 transition-all duration-300 font-content"
              >
                Schedule Call
                <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#8F94FF]/20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0 font-content">
              © 2024 AI Solutions. All rights reserved. | Privacy Policy | Terms
              of Service
            </div>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-[#1a1a2e] border border-[#8F94FF]/20 rounded-lg flex items-center justify-center text-[#8F94FF] hover:border-[#8F94FF]/40 hover:scale-110 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
