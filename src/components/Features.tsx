import React, { useEffect, useState } from 'react';
import { CheckCircle, Code, Cpu, Globe } from 'lucide-react';

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

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored AI solutions built specifically for your business requirements and industry needs.',
      benefits: ['Scalable Architecture', 'Industry-Specific Models', 'Seamless Integration', 'Ongoing Support']
    },
    {
      icon: Cpu,
      title: 'Advanced Processing',
      description: 'Lightning-fast AI processing with optimized algorithms and cutting-edge infrastructure.',
      benefits: ['Real-time Processing', 'Cloud & Edge Computing', 'Auto-scaling', 'High Availability']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy your AI solutions worldwide with our robust, secure, and compliant infrastructure.',
      benefits: ['Multi-region Support', 'GDPR Compliance', '99.9% Uptime', 'Enterprise Security']
    }
  ];

  return (
    <section id="features-section" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
              Why Choose Our AI Platform
            </span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            Built for enterprise scale with the flexibility of startup innovation. 
            Our platform delivers results that matter to your bottom line.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className={`flex-1 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mr-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-[#a1a1aa] mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#ff6b35] mr-3 flex-shrink-0" />
                      <span className="text-[#a1a1aa]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`flex-1 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] rounded-2xl p-8 border border-[#00d4ff]/20 backdrop-blur-sm">
                    {/* Mock code/interface */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-3 h-3 bg-[#ff6b35] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#00d4ff] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#8b5cf6] rounded-full"></div>
                      </div>
                      
                      <div className="font-mono text-sm space-y-2">
                        <div className="text-[#00d4ff]">// AI Model Configuration</div>
                        <div className="text-[#a1a1aa]">
                          <span className="text-[#8b5cf6]">const</span> model = <span className="text-[#ff6b35]">new</span> AIModel({'{'}
                        </div>
                        <div className="text-[#a1a1aa] ml-4">
                          type: <span className="text-[#00d4ff]">'enterprise'</span>,
                        </div>
                        <div className="text-[#a1a1aa] ml-4">
                          accuracy: <span className="text-[#ff6b35]">99.8</span>%,
                        </div>
                        <div className="text-[#a1a1aa] ml-4">
                          latency: <span className="text-[#ff6b35]">'&lt;50ms'</span>
                        </div>
                        <div className="text-[#a1a1aa]">{'});'}</div>
                      </div>

                      {/* Progress bars */}
                      <div className="space-y-3 mt-6">
                        <div>
                          <div className="flex justify-between text-sm text-[#a1a1aa] mb-1">
                            <span>Model Accuracy</span>
                            <span>99.8%</span>
                          </div>
                          <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                            <div className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] h-2 rounded-full" style={{width: '99.8%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-[#a1a1aa] mb-1">
                            <span>Processing Speed</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                            <div className="bg-gradient-to-r from-[#8b5cf6] to-[#ff6b35] h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#ff6b35]/20 to-[#00d4ff]/20 rounded-full blur-xl"></div>
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