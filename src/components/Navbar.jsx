import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const heroSectionHeight = document.getElementById("home")?.offsetHeight || 0;

      // Show the navbar if scrolling up or above the hero section
      if (currentScrollPos < lastScrollPos || currentScrollPos <= heroSectionHeight) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      // Add background to navbar when scrolling past hero section
      setIsScrolled(currentScrollPos > heroSectionHeight);

      // Update last scroll position
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 
        ${isScrolled ? "bg-black bg-opacity-70" : "bg-transparent"}
        ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}
        transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          <i className="fa-solid fa-house"></i>
        </Link>

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
            <Link to="/home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"}
            lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-75 py-4 px-6`}
        >
          <ul className="space-y-4 text-white">
            <li>
              <Link to="/home" className="hover:text-gray-400" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-gray-400" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
