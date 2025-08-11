import React, { useEffect, useState } from "react";
import { CheckCircle, Code, Cpu, Globe } from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored AI solutions built specifically for your business requirements and industry needs.",
      benefits: [
        "Scalable Architecture",
        "Industry-Specific Models",
        "Seamless Integration",
        "Ongoing Support",
      ],
    },
    {
      icon: Cpu,
      title: "Advanced Processing",
      description:
        "Lightning-fast AI processing with optimized algorithms and cutting-edge infrastructure.",
      benefits: [
        "Real-time Processing",
        "Cloud & Edge Computing",
        "Auto-scaling",
        "High Availability",
      ],
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description:
        "Deploy your AI solutions worldwide with our robust, secure, and compliant infrastructure.",
      benefits: [
        "Multi-region Support",
        "GDPR Compliance",
        "99.9% Uptime",
        "Enterprise Security",
      ],
    },
  ];

  return (
    <section
      id="features-section"
      className="py-24 px-6 relative"
      style={{
        background:
          "radial-gradient(circle at center, #0033CC 0%, #001a66 20%, #000000 60%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-white">Why Choose Our AI Platform</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-content">
            Built for enterprise scale with the flexibility of startup
            innovation. Our platform delivers results that matter to your bottom
            line.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#0033CC] to-[#8F94FF] mr-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-title">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-lg text-white mb-8 leading-relaxed font-content">
                  {feature.description}
                </p>

                <div className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#8F94FF] mr-3 flex-shrink-0" />
                      <span className="text-white font-content">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div
                className={`flex-1 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
              >
                <div className="relative">
                  <div className="modern-gradient-card rounded-2xl p-8">
                    {/* Mock code/interface */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-3 h-3 bg-[#8F94FF] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#0033CC] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#000000] rounded-full"></div>
                      </div>

                      <div className="font-mono text-sm space-y-2">
                        <div className="text-[#8F94FF]">
                          // AI Model Configuration
                        </div>
                        <div className="text-white">
                          <span className="text-[#000000]">const</span> model ={" "}
                          <span className="text-[#8F94FF]">new</span> AIModel(
                          {"{"}
                        </div>
                        <div className="text-white ml-4">
                          type:{" "}
                          <span className="text-[#0033CC]">'enterprise'</span>,
                        </div>
                        <div className="text-white ml-4">
                          accuracy: <span className="text-[#0033CC]">99.8</span>
                          %,
                        </div>
                        <div className="text-white ml-4">
                          latency:{" "}
                          <span className="text-[#0033CC]">'&lt;50ms'</span>
                        </div>
                        <div className="text-white">{"});"}</div>
                      </div>

                      {/* Progress bars */}
                      <div className="space-y-3 mt-6">
                        <div>
                          <div className="flex justify-between text-sm text-white mb-1 font-content">
                            <span>Model Accuracy</span>
                            <span>99.8%</span>
                          </div>
                          <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#0033CC] to-[#8F94FF] h-2 rounded-full"
                              style={{ width: "99.8%" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-white mb-1 font-content">
                            <span>Processing Speed</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#8F94FF] to-[#001a66] h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#8F94FF]/15 to-[#0033CC]/15 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#0033CC]/15 to-[#000000]/15 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Features;
