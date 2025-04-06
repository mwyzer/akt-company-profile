import React from "react";
import industrySolution from "../utils/industrySolution";

const IndustrySolution = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-50" id="industry-solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Industry Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Tailored digital strategies for every industry. Our solutions are
          designed to help you thrive in your unique market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industrySolution.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolution;
