import React from "react";

const Contact = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-white py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Our team is ready to assist you and provide the best solutions
              tailored to your business.
            </p>
          </div>
        </div>
        {/* contact form */}
        <div className="flex flex-col md:flex-row justify-between bg-tartiary rounded-lg md:p-8 p-4">
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-4">
              {/*radio input */}
              <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="hi"
                  />
                  Say Hi
                </label>
                <label className="flex items-center mt-2 md:mt-0">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="quote"
                  />
                  Get a Quote
                </label>
              </div>
              {/*name input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Enter your name here"
                />
              </div>
              {/*email input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Enter your email here"
                />
              </div>
              {/* textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300"
              >
                Book a consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
