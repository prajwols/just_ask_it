import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp Industries',
      content: "The AI solution delivered by this team exceeded all our expectations. We've seen a 300% increase in efficiency and our customers are happier than ever. The implementation was seamless and the support has been outstanding.",
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      company: 'Global Logistics Co',
      content: "Working with this AI team transformed our entire supply chain. The predictive analytics have saved us millions in operational costs, and the ROI was evident within the first quarter of implementation.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Chief Medical Officer',
      company: 'HealthTech Solutions',
      content: "The diagnostic AI system has revolutionized our patient care. We're now able to detect conditions 40% faster with 95% accuracy. This technology is literally saving lives every day in our hospitals.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Park',
      role: 'Head of Innovation',
      company: 'FinanceFirst Bank',
      content: "The fraud detection system has been a game-changer for our security. We've reduced false positives by 60% while catching 99% of actual fraud attempts. The customer experience has improved dramatically.",
      rating: 5,
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about their experience working with our AI solutions.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Card */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f23]/80 border border-[#00d4ff]/20 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#ff6b35] fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#00d4ff]/30"
                    />
                    <div>
                      <div className="text-lg font-bold text-white mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-[#00d4ff] font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-[#a1a1aa]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#00d4ff]/20 hover:bg-[#00d4ff]/40 border border-[#00d4ff]/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-[#00d4ff]" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#00d4ff]/20 hover:bg-[#00d4ff]/40 border border-[#00d4ff]/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-[#00d4ff]" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#00d4ff] scale-125' 
                  : 'bg-[#00d4ff]/30 hover:bg-[#00d4ff]/60'
              }`}
            />
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 text-center">
          <p className="text-[#a1a1aa] mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12 opacity-60">
            {['TechCorp', 'Global Logistics', 'HealthTech', 'FinanceFirst', 'InnovateLab'].map((company, index) => (
              <div key={index} className="text-[#a1a1aa] font-semibold text-lg hover:text-[#00d4ff] transition-colors duration-300 cursor-pointer">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;