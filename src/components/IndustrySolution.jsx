import React from "react";
import { motion } from "framer-motion";
import industrySolution from "../utils/industrySolution";
import variants from "../utils/variants"; // assuming you have the same variants function

const IndustrySolution = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="industry-solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("left", 0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-white py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Industry Solutions</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Tailored digital strategies for every industry. Our solutions are
              designed to help you thrive in your unique market.
            </p>
          </div>
        </motion.div>

        {/* Cards with motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industrySolution.map((industry, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={variants(direction, index * 0.2)}
                className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolution;
