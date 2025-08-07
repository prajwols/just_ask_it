import React from 'react';
import { Calendar, MessageSquare, FileText, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f23]/80 border border-[#00d4ff]/30 rounded-3xl p-8 md:p-16 text-center backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-[#a1a1aa] mb-12 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of companies already using our AI solutions to drive growth, 
              reduce costs, and stay ahead of the competition. Let's discuss your project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Calendar,
                  title: 'Free Consultation',
                  description: '30-minute strategy session to discuss your needs',
                  action: 'Book Now',
                  href: 'https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true',
                  primary: true
                },
                {
                  icon: FileText,
                  title: 'Custom Proposal',
                  description: 'Detailed roadmap and pricing for your project',
                  action: 'Get Proposal',
                  href: '#contact',
                  primary: false
                },
                {
                  icon: MessageSquare,
                  title: 'Live Demo',
                  description: 'See our AI solutions in action',
                  action: 'Request Demo',
                  href: '#demo',
                  primary: false
                }
              ].map((option, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#0f0f23]/50 border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:scale-105">
                    <div>
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mb-4 group-hover:scale-110 transition-transform duration-300">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                        {option.title}
                      </h3>
                      
                      <p className="text-[#a1a1aa] mb-6 flex-grow">
                        {option.description}
                      </p>
                    </div>
                    
                    <a
                      href={option.href}
                      target={option.href.startsWith('http') ? '_blank' : '_self'}
                      rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        option.primary
                          ? 'bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:scale-105'
                          : 'border-2 border-[#00d4ff]/50 text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10'
                      }`}
                    >
                      {option.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-[#a1a1aa]">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full mr-2"></div>
                No long-term contracts
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#00d4ff] rounded-full mr-2"></div>
                100% confidentiality guaranteed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mr-2"></div>
                Free consultation & proposal
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#0f0f23]/50 border border-[#8b5cf6]/20 rounded-2xl p-8 text-center hover:border-[#8b5cf6]/40 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8b5cf6] transition-colors duration-300">
              For Startups & SMBs
            </h3>
            <p className="text-[#a1a1aa] mb-6">
              Flexible AI solutions that scale with your business. Start small and grow fast.
            </p>
            <button className="px-6 py-3 border-2 border-[#8b5cf6]/50 text-[#8b5cf6] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300">
              Learn About Startup Plans
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#0f0f23]/50 border border-[#ff6b35]/20 rounded-2xl p-8 text-center hover:border-[#ff6b35]/40 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff6b35] transition-colors duration-300">
              For Enterprise
            </h3>
            <p className="text-[#a1a1aa] mb-6">
              Enterprise-grade AI infrastructure with dedicated support and custom integrations.
            </p>
            <button className="px-6 py-3 border-2 border-[#ff6b35]/50 text-[#ff6b35] rounded-lg hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 transition-all duration-300">
              Explore Enterprise Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;