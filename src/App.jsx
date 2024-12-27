import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import ServicesPage from "./components/ServicesPage";
import TermsPage from "./components/TermsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
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
    <Router>
      {/* Navbar component visible on every page */}
      <Navbar isScrolled={isScrolled} />

      <Routes>
        {/* Intro page */}
        <Route path="/" element={<Intro />} />

        {/* Home page */}
        <Route path="/home" element={<HomePage />} />

        {/* About Us page */}
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Contact Us page */}
        <Route path="/contact-us" element={<ContactUsPage />} />

        {/* Services page */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Terms and Privacy */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
      </Routes>

      {/* Footer component visible on every page */}
      <Footer />
    </Router>
  );
}

export default App;
