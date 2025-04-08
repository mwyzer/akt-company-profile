import React, { useState, useEffect, useMemo } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({ onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const menuItems = useMemo(
    () => [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Use Cases", href: "#case-studies" },
      { name: "Industry Solutions", href: "#industry-solutions" },
    ],
    []
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
    const targetId = menuItems
      .find((item) => item.name === name)
      ?.href?.slice(1);
    if (targetId && onSectionChange) {
      onSectionChange(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      menuItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = item.name;
          }
        }
      });

      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/">
            <img src="/fav-icon.png" alt="Logo" className="w-48 h-48" />
          </a>

          {/* Desktop Navigation */}
          <div className="space-x-6 hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`text-blue-600 px-2 hover:bg-gray-200 rounded-sm hover:underline underline-offset-4 transition duration-300 ${
                  activeItem === item.name
                    ? "text-primary underline underline-offset-1"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            {/* <a
              href="#contact"
              className="border px-4 py-2 border-black hover:border-blue-600 rounded-md transition duration-300 text-black hover:bg-blue-600 hover:text-white"
            >
              Request a Quote
            </a> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
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
                key={index}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
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
