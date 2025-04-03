import React from "react";

import bannerImg from "../assets/banner.png";
import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="bg-wite pt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Enabling Global Connectivity
            </h1>
            <p className="text-gray-600 mb-6">
              We Provide cloud communication industry, PT. AURA KREASI TEKNOLOGI
              core team possesses deep insights into the trends and dynamics of
              international expansion in key markets. We are dedicated to
              delivering high-quality 24/7/365 customer support services to our
              clients
            </p>
            <button className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">
              Book a consultation
            </button>
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 order:first md:order-last">
            <img
              src={bannerImg}
              alt="Banner"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
