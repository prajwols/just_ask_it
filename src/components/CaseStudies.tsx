import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    efficiency: 0,
    customers: 0,
    time: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  const targetValues = {
    revenue: 300,
    efficiency: 85,
    customers: 10000,
    time: 60
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counter animation
          Object.keys(targetValues).forEach(key => {
            const target = targetValues[key];
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounters(prev => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('case-studies-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const caseStudies = [
    {
      title: 'E-commerce Giant',
      challenge: 'Needed personalized product recommendations for 50M+ users',
      solution: 'Implemented ML-based recommendation engine with real-time processing',
      results: ['40% increase in conversion rates', '25% boost in average order value', '60% improvement in user engagement'],
      industry: 'Retail',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Healthcare Network',
      challenge: 'Manual patient data analysis causing treatment delays',
      solution: 'Deployed AI diagnostic assistant with predictive analytics',
      results: ['50% faster diagnosis time', '30% reduction in readmissions', '95% accuracy in risk prediction'],
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Manufacturing Corp',
      challenge: 'Unpredictable equipment failures causing production losses',
      solution: 'Built predictive maintenance system with IoT integration',
      results: ['70% reduction in downtime', '$2M annual savings', '90% prediction accuracy'],
      industry: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const metrics = [
    { icon: DollarSign, label: 'Revenue Increase', value: `${counters.revenue}%`, color: 'text-[#ff6b35]' },
    { icon: TrendingUp, label: 'Efficiency Boost', value: `${counters.efficiency}%`, color: 'text-[#00d4ff]' },
    { icon: Users, label: 'Users Impacted', value: `${(counters.customers / 1000).toFixed(0)}K+`, color: 'text-[#8b5cf6]' },
    { icon: Clock, label: 'Time Saved', value: `${counters.time}%`, color: 'text-[#ff6b35]' }
  ];

  return (
    <section id="case-studies-section" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
              Real Results, Real Impact
            </span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries, 
            delivering measurable results and competitive advantages.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#1a1a2e]/50 to-[#0f0f23]/50 border border-[#00d4ff]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-[#a1a1aa] font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#1a1a2e]/50 to-[#0f0f23]/50 rounded-2xl overflow-hidden border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'animate-slideUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#00d4ff]/20 border border-[#00d4ff]/40 rounded-full text-sm text-[#00d4ff] backdrop-blur-sm">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#ff6b35] mb-1">Challenge:</h4>
                  <p className="text-[#a1a1aa] text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#8b5cf6] mb-1">Solution:</h4>
                  <p className="text-[#a1a1aa] text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-[#00d4ff] mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-[#a1a1aa] text-sm flex items-start">
                        <div className="w-1 h-1 bg-[#00d4ff] rounded-full mt-2 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#00d4ff]/5 to-[#8b5cf6]/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;