import React, { useEffect, useState } from 'react';
import { Cloud, Database, Cpu, Shield, Zap, Brain } from 'lucide-react';

const TechStack = () => {
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

    const element = document.getElementById('tech-stack-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { icon: Brain, name: 'TensorFlow', category: 'ML Framework', color: 'from-[#ff6b35] to-[#ff8c42]' },
    { icon: Cpu, name: 'PyTorch', category: 'Deep Learning', color: 'from-[#00d4ff] to-[#0ea5e9]' },
    { icon: Database, name: 'PostgreSQL', category: 'Database', color: 'from-[#8b5cf6] to-[#a855f7]' },
    { icon: Cloud, name: 'AWS/Azure', category: 'Cloud Platform', color: 'from-[#ff6b35] to-[#f97316]' },
    { icon: Shield, name: 'Kubernetes', category: 'Orchestration', color: 'from-[#00d4ff] to-[#06b6d4]' },
    { icon: Zap, name: 'FastAPI', category: 'API Framework', color: 'from-[#8b5cf6] to-[#9333ea]' },
  ];

  return (
    <section id="tech-stack-section" className="py-24 px-6 relative bg-gradient-to-b from-[#0a0a0b] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            We leverage the most advanced tools and frameworks to build robust, 
            scalable AI solutions that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative text-center ${isVisible ? 'animate-float' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + Math.random() * 2}s` 
              }}
            >
              {/* Icon container */}
              <div className="relative mx-auto w-20 h-20 mb-4">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm`}></div>
                <div className={`relative w-full h-full rounded-2xl bg-gradient-to-r ${tech.color} p-4 group-hover:scale-110 transition-all duration-300 cursor-pointer`}>
                  <tech.icon className="w-full h-full text-white" />
                </div>
                
                {/* Pulse animation */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 animate-ping`}></div>
              </div>

              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#00d4ff] transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-[#a1a1aa] text-sm">
                {tech.category}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'Uptime Guaranteed', color: 'text-[#00d4ff]' },
            { number: '<50ms', label: 'Average Latency', color: 'text-[#8b5cf6]' },
            { number: '10x', label: 'Performance Boost', color: 'text-[#ff6b35]' },
            { number: '24/7', label: 'Monitoring', color: 'text-[#00d4ff]' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? 'animate-countUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
            >
              <div className={`text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-[#a1a1aa] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-countUp {
          animation: countUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TechStack;