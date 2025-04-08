import React from "react";
// import footerLogo from "../assets/footer-logo.png";
import footerLogo1 from "../assets/footer-logo-small.png";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
      <div className="bg-secondary rounded-t-2xl">
        {/* first section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {/* logo */}
          <div>
            <img src={footerLogo1} alt="AKT Logo" className="w-36 h-auto" />
          </div>

          {/* menu items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#use-cases" className="text-white hover:text-gray-400">
              Use Cases
            </a>
            <a
              href="#industry-solutions"
              className="text-white hover:text-gray-400"
            >
              Industry Solution
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
