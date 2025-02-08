import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black flex justify-between items-center px-12 py-6  text-wrap ">
      {/* Logo */}
      <div className="logo">
        <a href="#" className="text-white text-sm lg:text-xl">
          MAHESH
        </a>
      </div>

      {/* Navbar Toggler Button (Only Visible on Mobile) */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute top-16 left-0 w-full bg-black md:static md:w-auto md:flex transition-all duration-300  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-center lg:text-xl md:text-md font-sans  font-normal text-white flex flex-col md:flex-row gap-y-4 md:gap-x-10 p-5 md:p-0">
          <a href="#home" className="hover:text-yellow-200">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-200">
            About
          </a>

          <a href="#project" className="hover:text-yellow-200">
            Projects
          </a>

          <a href="#contact" className="hover:text-yellow-200">
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
