import React from "react";

const BookingSection = () => {
  return (
    <section
      id="booking-section"
      className="relative bg-white px-6 py-24 dark:bg-[radial-gradient(circle_at_center,#0033CC_15%,#001a66_20%,#000000_60%,#000000_100%)]"
    >
      <div className="max-w-[60rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-slate-950 dark:text-white">Let's Connect</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-content dark:text-white">
            We're here to answer your questions and explore how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="p-0 sm:p-6 w-full">
            <iframe
              src="https://cal.com/prajwol-subedi-sztcmv/30min?overlayCalendar=true"
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-xl border border-slate-200 bg-white shadow-sm"
              title="Book Discovery Call"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
