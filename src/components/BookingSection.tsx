import React from "react";

const BookingSection = () => {
  return (
    <section
      id="booking-section"
      className="py-24 px-6 relative bg-gradient-to-b from-[#0a0a0b] to-[#1a1a2e] "
      style={{
        background:
          "radial-gradient(circle at center, #0033CC 15%, #001a66 20%, #000000 60%, #000000 100%)",
      }}
    >
      <div className="max-w-[60rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-white">Let's Connect</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-content">
            We're here to answer your questions and explore how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="p-6 w-full">
            <iframe
              src="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-xl"
              title="Book Discovery Call"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
