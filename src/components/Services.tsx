import React from 'react';
import { Brain, Database, MessageSquare, BarChart3, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML solutions tailored to your business needs with state-of-the-art algorithms and continuous learning capabilities.',
      color: 'from-[#00d4ff] to-[#8b5cf6]'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants that understand context and provide human-like interactions.',
      color: 'from-[#8b5cf6] to-[#ff6b35]'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics and predictive modeling.',
      color: 'from-[#ff6b35] to-[#00d4ff]'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Real-time dashboards and reporting systems that help you make data-driven decisions.',
      color: 'from-[#00d4ff] to-[#8b5cf6]'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Robust security measures and compliance frameworks to protect your AI implementations.',
      color: 'from-[#8b5cf6] to-[#ff6b35]'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that adapts and learns from your workflows.',
      color: 'from-[#ff6b35] to-[#00d4ff]'
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
              Our AI Services
            </span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            Comprehensive AI solutions designed to accelerate your digital transformation 
            and unlock new possibilities for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a2e]/50 to-[#0f0f23]/50 border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm"
              style={{
                transform: 'perspective(1000px) rotateX(0deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#a1a1aa] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="text-[#00d4ff] font-medium flex items-center group/link hover:text-[#8b5cf6] transition-colors duration-300">
                  Learn More
                  <div className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 blur-xl -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;