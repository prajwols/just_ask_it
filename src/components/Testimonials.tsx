import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nikita Kutsokon",
      position: "AI automation lead",
      company: "Nobel Navigators",
      avatar:
        "https://res.cloudinary.com/dizpfirmr/image/upload/v1754818111/nikita_wyoekl.jpg",
      messages: [
        { text: "Looks awesome 🔥", type: "client" },
        {
          text: "We've definitely seen a significant increase in leads and growth!",
          type: "client",
        },
        {
          text: "Thrilled to hear you're happy with the results!",
          type: "company",
        },
      ],
    },
    {
      name: "Ananda Chaudary",
      position: "Founder",
      company: "Anovox Labs",
      avatar:
        "https://res.cloudinary.com/dizpfirmr/image/upload/v1754815177/ananada_eknxca.jpg",
      messages: [
        { text: "The AI solution is incredible! ", type: "client" },
        { text: "Our efficiency has improved by 300%", type: "client" },
        {
          text: "That's amazing! We're so glad it's working well for you 💙.",
          type: "company",
        },
      ],
    },
    {
      name: "Prabesh Dahal",
      position: "CEO",
      company: "Krip Artificial Intelligence",
      avatar:
        "https://res.cloudinary.com/dizpfirmr/image/upload/v1754817810/prabesh_qlm1mr.jpg",
      messages: [
        { text: "This has revolutionized our patient care ", type: "client" },
        { text: "We're detecting conditions 40% faster now", type: "client" },
        {
          text: "That's exactly what we hoped for! Saving lives is what matters most.",
          type: "company",
        },
      ],
    },
    {
      name: "Emma",
      position: "Founder & CEO",
      company: "Turing Research and Development",
      avatar:
        "https://res.cloudinary.com/dizpfirmr/image/upload/v1754815779/avatar1_limdxc.avif",
      messages: [
        {
          text: "The AI chatbot and voice agent are game-changers! ",
          type: "client",
        },
        {
          text: "Customer satisfaction increased by 85% and response time dropped to seconds",
          type: "client",
        },
        {
          text: "Excellent results! AI-powered customer service is the future.",
          type: "company",
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#0033CC] to-[#001a66]"  style={{
      background:
        "radial-gradient(circle at center, #000000 0%, #001a66 30%, #000000 60%, #0033CC 100%)",
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-white">Real Client Conversations</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-content">
            See what our clients are saying in real-time. These are actual
            conversations from our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 flex flex-col gap-4 min-h-[400px] md:min-h-[500px] w-full shadow-lg"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    {testimonial.name}
                  </span>
                  {testimonial.position && testimonial.company && (
                    <span className="text-xs md:text-sm text-gray-500">
                      {testimonial.position} at {testimonial.company}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-3">
                {testimonial.messages.map((message, msgIndex) => (
                  <div key={msgIndex} className="flex flex-col">
                    {message.type === "company" && (
                      <div className="text-xs text-gray-500 mb-1 font-semibold self-end">
                        Just Ask IT
                      </div>
                    )}
                    <div
                      className={`p-2 md:p-3 rounded-lg w-fit max-w-[85%] text-sm md:text-base ${
                        message.type === "client"
                          ? "bg-gray-100 text-gray-800 self-start rounded-br-md"
                          : "bg-black text-white self-end rounded-bl-md"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        {/* <div className="mt-16 text-center">
          <p className="text-white mb-8 font-content">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12 opacity-60">
            {[
              "TechCorp",
              "Global Logistics",
              "HealthTech",
              "FinanceFirst",
              "InnovateLab",
            ].map((company, index) => (
              <div
                key={index}
                className="text-white font-semibold text-lg hover:text-[#8F94FF] transition-colors duration-300 cursor-pointer font-content"
              >
                {company}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
