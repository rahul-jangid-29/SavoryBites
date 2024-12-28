import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

function ServicesPage() {
  return (
    <section className="h-screen bg-gradient-to-br from-red-900 via-black to-gray-800 text-white flex items-center justify-center text-center p-6">
      <div className="container mx-auto">
        {/* Page Heading with Animation */}
        <motion.h1
          className="text-5xl font-bold mb-6 text-red-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg mb-12 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our exceptional dining experience and tailored offerings.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="service-card p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Fine Dining</h3>
            <p className="text-gray-200">
              Savor gourmet dishes crafted with love and precision.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="service-card p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Catering</h3>
            <p className="text-gray-200">
              Personalized catering for events and celebrations.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="service-card p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Takeaway</h3>
            <p className="text-gray-200">
              Enjoy our delicious meals in the comfort of your home.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
