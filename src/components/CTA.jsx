import React from "react";
import { motion } from "framer-motion";
import ctaImage from "../assets/cta-image.png";
import variants from "../utils/variants"; // optional if you're using a shared variant helper

const CTA = () => {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-3xl font-bold text-primary mb-4">
            Let&apos;s make things happen
          </h1>
          <p className="text-gray-600 mb-6 md:w-2/3">
            Contact us today to learn more about our services and how we can
            help your business grow. Our team is ready to assist you with all
            your digital marketing needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300"
          >
            Get your free proposal
          </motion.button>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/2 flex justify-center items-center relative"
        >
          <img
            src={ctaImage}
            alt="cta image"
            className="md:absolute md:-top-52 md:bottom-0"
            style={{ transform: "scale(1.05)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
