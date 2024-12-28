import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

function ContactUsPage() {
  return (
    <section className="h-screen bg-gradient-to-br from-red-900 via-black to-gray-800 text-white flex items-center justify-center p-6">
      <div className="container mx-auto max-w-xl">
        {/* Page Heading with Animation */}
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-red-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name Input */}
          <motion.input
            type="text"
            placeholder="Your Name"
            className="block w-full p-4 bg-white/10 text-white border rounded-lg backdrop-blur-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Your Email"
            className="block w-full p-4 bg-white/10 text-white border rounded-lg backdrop-blur-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          {/* Message Textarea */}
          <motion.textarea
            placeholder="Your Message"
            className="block w-full p-4 bg-white/10 text-white border rounded-lg backdrop-blur-md focus:ring-2 focus:ring-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            className="w-full bg-red-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactUsPage;
