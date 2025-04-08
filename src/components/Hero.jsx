import React from "react";

import bannerImg from "../assets/banner.png";
import LogoCarousel from "./LogoCarousel";
import { motion } from "framer-motion";
import variants from "../utils/variants";

const Hero = () => {
  return (
    <section className="bg-wite pt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side Content */}
          <div className="md:w-2/3">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              Enabling Global Connectivity
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.5)}
              className="text-gray-600 mb-6"
            >
              We provide cloud communication industry, PT. AURA KREASI TEKNOLOGI
              core team possesses deep insights into the trends and dynamics of
              international expansion in key markets. We are dedicated to
              delivering high-quality 24/7/365 customer support services to our
              clients
            </motion.p>
            {/* <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.6)}
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300"
            >
              Book a consultation
            </motion.button> */}
          </div>

          {/* Right Side Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={variants("bottom", 0.2)}
            className="md:w-1/2 order:first md:order-last"
          >
            <img
              src={bannerImg}
              alt="Banner"
              className="w-full h-auto rounded-md"
            />
          </motion.div>
        </div>
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
