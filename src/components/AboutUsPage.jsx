import React from "react";
import { motion } from "framer-motion"; // Optional: for animation

function AboutUsPage() {
  return (
    <section className="h-screen bg-gradient-to-br from-red-900 via-black to-gray-800 text-white flex items-center justify-center p-6">
      <div className="container mx-auto text-center max-w-3xl">
        {/* Heading with Animation */}
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-red-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        {/* About Us Description */}
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At SavoryBites, we pride ourselves on providing excellent food and unforgettable dining experiences. Our team of chefs and staff are dedicated to bringing you the finest dishes made with the highest quality ingredients. Whether you're here for a casual meal or celebrating a special occasion, we promise you an experience that delights all your senses.
        </motion.p>
        
        {/* Optional: Add more details or sections */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To create memorable experiences by serving delicious meals, offering impeccable service, and making every guest feel like family.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUsPage;
