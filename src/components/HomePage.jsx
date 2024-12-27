import React from "react";
import heroImage from "../assets/hero.jpg"; // Import image directly
import Navbar from "./Navbar";
import EventsPage from "./EventsPage";
import GalleryPage from "./GalleryPage";
import MenuPage from "./MenuPage";
import OnlineOrderingPage from "./OnlineOrderingPage";
import Reservation from "./ReservationPage";
import "../styles/homepage.css"

function HeroPage() {

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="h-screen relative overflow-hidden">
        {/* Hero Image with Ken Burns Effect */}
        <div
          className="hero-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        ></div>

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

      <EventsPage />
      <GalleryPage />
      <MenuPage />
      <Reservation />
    </div>
  );
}

export default HeroPage;
