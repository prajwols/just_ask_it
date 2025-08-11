import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to implement AI VoiceAgent or Chatbot?",
      answer:
        "It depends on complexity, but most projects are completed within 2–4 weeks after our initial consultation.",
    },
    {
      question: "What can AI VoiceAgent do for my business?",
      answer:
        "Voices Agent can handle inbound queries, make outbound calls, and follow up with leads — all at scale and without missing a beat.",
    },
    {
      question: "Does AI ChatBots work on any website or platform?",
      answer:
        "Yes. ChatWords can be integrated into most websites, apps, or CRMs for seamless customer interaction.",
    },
    {
      question: "Can ChatBot respond in multiple languages?",
      answer:
        "Absolutely. It supports multiple languages so you can engage with a global audience.",
    },
    {
      question: "Do you provide custom AI solutions?",
      answer:
        "Yes. We create AI tools tailored to your unique business processes, from automation to analytics.",
    },
    {
      question: "Will AI replace my human team?",
      answer:
        "No — AI is here to support your team by taking care of repetitive tasks, so your staff can focus on high-value work.",
    },
    {
      question: "Is AI safe for handling customer data?",
      answer:
        "Yes. We follow strict security protocols to keep customer information secure and compliant.",
    },
    {
      question: "Can AI VoicesIn make follow-up calls automatically?",
      answer:
        "Yes. It can be programmed to follow up with leads at the right time without human intervention.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply book a consultation with us — we'll assess your needs and start the onboarding process right away.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0b]"     style={{
      background:
        "radial-gradient(circle at center, #0033CC 0%, #001a66 20%, #000000 60%, #000000 100%)",
    }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-white">Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="rounded-2xl p-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${index !== faqs.length - 1 ? "mb-4" : ""}`}
            >
              <div
                className={`${
                  index === 0
                    ? "border-t border-b border-[#8F94FF]/20"
                    : "border-b border-[#8F94FF]/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300"
                >
                  <span className="text-white font-medium font-manrope text-xl pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronDown className="w-5 h-5 text-[#8F94FF] transform rotate-180 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#8F94FF] transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pt-4 pb-4">
                    <p className="text-[#a7aeb3d5] font-manrope leading-relaxed font-content">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
