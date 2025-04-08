import React from "react";
// import footerLogo from "../assets/footer-logo.png";
import footerLogo1 from "../assets/footer-logo-small.png";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
      <div className="bg-primary rounded-t-2xl">
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
            <a href="#case-studies" className="text-white hover:text-gray-400">
              Use Cases
            </a>
            <a
              href="#industry-solutions"
              className="text-white hover:text-gray-400"
            >
              Industry Solutions
            </a>
          </div>
          {/* social icons */}
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
        <FooterContact />
        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-5 text-white border-t border-white/10">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aura Teknologi. All rights
            reserved.
          </p>
          <a
            href="#"
            className="text-sm underline underline-offset-4 hover:text-gray-300 mt-2 md:mt-0"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
