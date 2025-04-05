import React from "react";

const CTA = () => {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* left side */}
        <div>
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's make things happen
            </h1>
            <p className="text-gray-600 mb-6">
              Contact us today to learn more about our services and how we can
              help your business grow. Our team is ready to assist you with all
              your digital marketing needs.
            </p>
            <button className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">
              Get your free proposal
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div>Right Side</div>
      </div>
    </section>
  );
};

export default CTA;
