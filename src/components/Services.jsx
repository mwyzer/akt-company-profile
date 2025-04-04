import React from "react";
import { servicesData } from "../utils/services";
import LinkIcon from "../assets/link-icon.png";

const Services = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
        </div>
        <div>
          <p className="text-secondary md:w-2/3">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Add your services cards here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] ${service.backgroundColor} ${service.textColor} `}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>
                <a href="#" className="flex items-center gap-2 mt-2">
                  <img
                    src={LinkIcon}
                    alt="link icon"
                    className="size-6 rounded-full"
                  />
                  <span className="text-lg font-medium">Learn more</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
