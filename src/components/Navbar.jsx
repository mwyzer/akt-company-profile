import React from "react";

const Navbar = () => {
  const menuItems = [
    // { name: "About Us", href: "#about-us" },
    // { name: "Services", href: "#services" },
    // { name: "Use Cases", href: "#use-cases" },
    // { name: "Case Study", href: "#case-study" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <a href="/"></a>
          <img src="/fav-icon.png" alt="" className="w-65 h-36" />
        </div>
        {/* nav items */}
        <div>
          {menuItems.map((item, index) => (
            <a href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
