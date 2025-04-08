import React from "react";
import { motion } from "framer-motion";
import caseStudies from "../utils/caseStudies";
import { MdOutlineArrowOutward } from "react-icons/md";
import variants from "../utils/variants"; // optional helper for direction-based variants

const CaseStudies = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants("left", 0.1)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-white py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Case Studies</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
        </motion.div>

        {/* Case study list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
          className="bg-white text-white p-8 rounded-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-6 border border-gray-700 rounded-md flex flex-col justify-between h-full bg-primary transition-transform duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="mb-4 text-gray-300">{study.description}</p>
                  {study.benefits && (
                    <ul className="space-y-2 mb-4">
                      {study.benefits.map((benefit, bIndex) => (
                        <li
                          key={bIndex}
                          className="text-sm text-green-400 bg-green-950 bg-opacity-20 px-3 py-1 rounded-full inline-flex items-center gap-2"
                        >
                          <span>{benefit.icon}</span>
                          <span>{benefit.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <a
                  href="#"
                  className="text-primary inline-flex items-center gap-1 hover:underline mt-auto"
                >
                  <span>Read More</span>
                  <MdOutlineArrowOutward size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
