import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

function ReservationPage() {
  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center p-6">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-red-700 mb-6">Make a Reservation</h1>
        <form className="space-y-4">
          {/* Name Input */}
          <motion.input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          {/* Date Input */}
          <motion.input
            type="date"
            className="block w-full p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          {/* Time Input */}
          <motion.input
            type="time"
            className="block w-full p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          {/* Submit Button */}
          <motion.button
            className="w-full bg-red-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Book Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default ReservationPage;
