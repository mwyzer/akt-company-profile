import React from "react";
import { servicesData } from "../utils/services";
import { motion } from "framer-motion";
import variants from "../utils/variants";

const Services = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("left", 0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-white py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              PT. AURA KREASI TEKNOLOGI delivers comprehensive and professional
              advisory services, supporting clients from pre-sales to
              after-sales stages. Our dedicated team ensures seamless assistance
              throughout the entire customer journey. We offer 24/7/365 customer
              support with a fast-response system to resolve issues efficiently.
            </p>
          </div>
        </motion.div>

        {/* Services cards with motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => {
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={variants(direction, index * 0.2)}
                className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-secondary cursor-pointer ${service.backgroundColor} ${service.textColor}`}
              >
                <div className="md:w-1/2 flex flex-col h-full justify-between">
                  <button
                    className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}
                  >
                    {service.title}
                  </button>

                  {/* Description */}
                  <p className="text-base">{service.description}</p>
                </div>

                {/* Service image */}
                <div className="md:w-1/2 order-first md:order-last">
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    className="w-full object-cover rounded-md mb-4"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
