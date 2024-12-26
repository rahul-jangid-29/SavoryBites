// src/components/Navbar.jsx

import React, { useState } from "react";

function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 ${
        isScrolled ? "bg-black bg-opacity-70" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-white">
          Logo
        </a>

        {/* Mobile hamburger icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-lg text-white">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-75 py-4 px-6`}
        >
          <ul className="space-y-4 text-white">
            <li>
              <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
