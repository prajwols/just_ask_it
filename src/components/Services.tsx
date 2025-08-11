import React from "react";
import { Phone, Send, Bot, Headphones, Cpu } from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description:
        "Boost your customer support with chatbots that answer instantly, helping clients while you work on growing your business.",
      cta: "Get Started",
      ctaIcon: Send,
      visual: "chatbot-visual",
      image:
        "https://images.unsplash.com/photo-1627634771100-b78244ffd302?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Headphones,
      title: "AI Voice Agent",
      description:
        "Let our voice agents take care of your customer calls, handling inquiries quickly and freeing up your team to focus on the big stuff.",
      cta: "Get Started",
      ctaIcon: Send,
      visual: "voice-visual",
      image:
        "https://images.unsplash.com/photo-1601856254555-a9c0ebef8af3?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    },
    {
      icon: Cpu,
      title: "Custom AI Solutions",
      description:
        "Tailored AI solutions built specifically for your business requirements and industry needs with state-of-the-art algorithms.",
      cta: "Get Started",
      ctaIcon: Send,
      visual: "custom-visual",
      image:
        "https://plus.unsplash.com/premium_photo-1679517155620-8048e22078b1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section
      id="services-section"
      className="py-24 px-6 relative"
      style={{
        background:
          "radial-gradient(circle at center, #0033CC -120%, #001a66 15%, #000000 60%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-title">
              <span className="text-white">Discover Our Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8F94FF] to-[#0033CC] rounded-full"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-[#8F94FF] rounded-full"></div>
            <button className="bg-[#8F94FF]/20 text-[#8F94FF] px-4 py-2 rounded-lg font-medium hover:bg-[#8F94FF]/30 transition-colors duration-300 font-content">
              Services
            </button>
          </div>
        </div>

        {/* Service Cards - All in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-black/40 hover:bg-black/60 transition-all duration-500 hover:scale-105 cursor-pointer border border-white/10 overflow-hidden min-h-[450px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0033CC]/40 to-[#8F94FF]/40"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-[#0033CC] to-[#8F94FF] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#8F94FF] transition-colors duration-300 font-title">
                  {service.title}
                </h3>

                <p className="text-white/80 leading-relaxed mb-6 font-content text-sm">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => scrollToSection("booking-section")}
                  className="text-white font-medium flex items-center group/link hover:text-[#8F94FF] transition-colors duration-300 font-content border-b border-white/30 hover:border-[#8F94FF]/50 pb-1 text-sm"
                >
                  {service.cta}
                  <service.ctaIcon className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#8F94FF]/10 to-[#0033CC]/10 blur-xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Consultation Card - Full Width */}
        <div className="group relative p-8 rounded-2xl bg-black/40 hover:bg-black/60 transition-all duration-500 hover:scale-105 cursor-pointer border border-white/10 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0033CC]/40 to-[#8F94FF]/40"></div>
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-[#0033CC] to-[#8F94FF] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#8F94FF] transition-colors duration-300 font-title">
              30 min Consultation
            </h3>

            <p className="text-white/80 leading-relaxed mb-6 font-content">
              Not exactly sure how AI Chatbot or AI Voice Agent or AI Solutions
              could be integrated into your Business? Then book a 1:1
              consultation call.
            </p>

            {/* CTA */}
            <button
              onClick={() => scrollToSection("booking-section")}
              className="text-white font-medium flex items-center group/link hover:text-[#8F94FF] transition-colors duration-300 font-content border-b border-white/30 hover:border-[#8F94FF]/50 pb-1"
            >
              1:1 Consultation
              <Phone className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#8F94FF]/10 to-[#0033CC]/10 blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
