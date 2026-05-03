import React from "react";
import { Phone, Send, Bot, Headphones, Cpu, Code2, Globe2, MonitorSmartphone } from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const aiServices = [
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
  const softwareServices = [
    {
      icon: Globe2,
      title: "Websites",
      description:
        "Clean, fast, responsive websites built to explain your offer clearly and turn visitors into booked calls.",
      cta: "Get Started",
      ctaIcon: Send,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: MonitorSmartphone,
      title: "Web Apps",
      description:
        "Custom dashboards, portals, internal tools, and customer-facing apps designed around the workflows your team already uses.",
      cta: "Get Started",
      ctaIcon: Send,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Code2,
      title: "Software Builds",
      description:
        "Reliable software systems, integrations, and automations built with clean architecture so your operations can scale.",
      cta: "Get Started",
      ctaIcon: Send,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const ServiceCard = ({ service }: { service: (typeof aiServices)[number] | (typeof softwareServices)[number] }) => (
    <div className="group relative min-h-[430px] cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/60">
      <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-15 dark:opacity-20 dark:group-hover:opacity-30">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-[#0033CC]/20 dark:from-[#0033CC]/40 dark:to-[#8F94FF]/40"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-xl bg-slate-950 p-4 shadow-lg transition-transform duration-300 group-hover:scale-110 dark:bg-gradient-to-r dark:from-[#0033CC] dark:to-[#8F94FF]">
          <service.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="mb-4 font-title text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#0033CC] dark:text-white dark:group-hover:text-[#8F94FF]">
          {service.title}
        </h3>

        <p className="mb-6 font-content text-sm leading-relaxed text-slate-600 dark:text-white/80">
          {service.description}
        </p>

        <button
          onClick={() => scrollToSection("booking-section")}
          className="group/link flex items-center border-b border-slate-300 pb-1 font-content text-sm font-medium text-slate-950 transition-colors duration-300 hover:border-[#0033CC]/50 hover:text-[#0033CC] dark:border-white/30 dark:text-white dark:hover:border-[#8F94FF]/50 dark:hover:text-[#8F94FF]"
        >
          {service.cta}
          <service.ctaIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="services-section"
      className="relative bg-slate-50 px-6 py-24 dark:bg-[radial-gradient(circle_at_center,#0033CC_-120%,#001a66_15%,#000000_60%,#000000_100%)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-title">
              <span className="text-slate-950 dark:text-white">Discover Our Solutions</span>
            </h2>
            <p className="max-w-2xl text-slate-600 font-content dark:text-white/80">
              We now support the full digital stack: AI systems, software products, and conversion-focused websites.
            </p>
            <div className="mt-5 w-24 h-1 bg-gradient-to-r from-[#0033CC] to-slate-950 rounded-full dark:from-[#8F94FF] dark:to-[#0033CC]"></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-[#0033CC] rounded-full dark:bg-[#8F94FF]"></div>
            <button className="bg-white text-slate-950 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors duration-300 font-content dark:bg-[#8F94FF]/20 dark:text-[#8F94FF] dark:hover:bg-[#8F94FF]/30">
              Solutions
            </button>
          </div>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 font-title text-2xl font-bold text-slate-950 dark:text-white">
            AI Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-6 font-title text-2xl font-bold text-slate-950 dark:text-white">
            Web & Software
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Consultation Card - Full Width */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/60">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500 dark:opacity-20 dark:group-hover:opacity-30">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-[#0033CC]/20 dark:from-[#0033CC]/40 dark:to-[#8F94FF]/40"></div>
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-xl bg-slate-950 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg dark:bg-gradient-to-r dark:from-[#0033CC] dark:to-[#8F94FF]">
              <Phone className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 text-slate-950 group-hover:text-[#0033CC] transition-colors duration-300 font-title dark:text-white dark:group-hover:text-[#8F94FF]">
              30 min Consultation
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6 font-content dark:text-white/80">
              Not exactly sure how AI, websites, or custom software could be
              integrated into your business? Then book a 1:1 consultation call.
            </p>

            {/* CTA */}
            <button
              onClick={() => scrollToSection("booking-section")}
              className="text-slate-950 font-medium flex items-center group/link hover:text-[#0033CC] transition-colors duration-300 font-content border-b border-slate-300 hover:border-[#0033CC]/50 pb-1 dark:text-white dark:hover:text-[#8F94FF] dark:border-white/30 dark:hover:border-[#8F94FF]/50"
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
