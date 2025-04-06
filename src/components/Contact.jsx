import React from "react";

function Contact() {
  return (
    <section className="pt-24 pb-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-white py-2 px-16 rounded-md"></div>
          <h2 className="text-2xl font-bold">Contact</h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-secondary md:w-2/3">
            Connect with Us: <br />
            Let's discuss your project and how we can help you achieve your
            goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
