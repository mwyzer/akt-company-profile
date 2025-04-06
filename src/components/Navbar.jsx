import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false); // Close the menu after clicking
  };
  const menuItems = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Industry Solutions", href: "#industry-solutions" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <a href="/">
              <img src="/fav-icon.png" alt="Logo" className="w-48 h-48" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="space-x-6 hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`text-blue-600 px-2 hover:bg-gray-200 rounded-sm hover:underline underline-offset-4 transition duration-300"
                    ${
                      activeItem === item.name
                        ? "text-primary underline underline-offset-1"
                        : ""
                    }`}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:border-blue-600 rounded-md transition duration-300 text-black hover:bg-blue-600 hover:text-white"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button (Aligned Properly) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 focus:outline-none"
            >
              {isOpen ? (
                <MdOutlineClose size={30} />
              ) : (
                <HiOutlineMenuAlt3 size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                key={index}
                href={item.href}
                className={`block text-blue-600 px-2 hover:bg-gray-200 rounded-sm hover:underline underline-offset-4 transition duration-300 ${
                  activeItem === item.name ? "text-primary" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block border px-4 py-2 border-black hover:border-blue-600 rounded-md transition duration-300 text-black hover:bg-blue-600 hover:text-white"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
