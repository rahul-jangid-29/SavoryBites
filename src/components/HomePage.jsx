// src/components/HeroPage.jsx

import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg"; // Import image directly
import Navbar from "./Navbar";

function HeroPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for sticky navbar effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroImage})`, // Use the imported image here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto h-full flex justify-center items-center relative z-10">
          <div className="text-center text-white space-y-4 animate-fadeIn">
            <h1 className="text-5xl sm:text-7xl font-extrabold animate-slideUp">
              Welcome to SavoryBites
            </h1>
            <p className="text-xl sm:text-2xl animate-slideUp">
              A place of delicious food and great experiences.
            </p>
            <button className="mt-6 py-3 px-8 bg-red-700 text-white text-xl font-semibold rounded-lg transform transition duration-300 hover:bg-red-900 hover:scale-105">
              Book a Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
