import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaMusic, FaWineGlassAlt, FaUtensils, FaCocktail } from "react-icons/fa";

const events = [
  {
    title: "Live Jazz Night",
    date: "July 15, 2024",
    description: "Enjoy live music while you dine, with a relaxing ambiance and delicious food.",
    icon: <FaMusic className="text-red-600 text-5xl" />,
  },
  {
    title: "Wine Tasting Event",
    date: "August 10, 2024",
    description: "Sample our finest wine collection, paired with gourmet appetizers.",
    icon: <FaWineGlassAlt className="text-red-600 text-5xl" />,
  },
  {
    title: "Chef's Tasting Menu",
    date: "September 5, 2024",
    description: "Experience a curated multi-course menu crafted by our expert chefs.",
    icon: <FaUtensils className="text-red-600 text-5xl" />,
  },
  {
    title: "Cocktail Mixing Workshop",
    date: "October 20, 2024",
    description: "Learn to craft your favorite cocktails in this hands-on workshop.",
    icon: <FaCocktail className="text-red-600 text-5xl" />,
  },
];

function EventsPage() {
  return (
    <div className="mt-5 bg-gradient-to-br from-red-100 via-white to-red-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <motion.div
        className="flex-grow flex items-center justify-center flex-col text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold text-red-700 mb-6">Upcoming Events</h1>
        <p className="text-gray-700 text-lg max-w-3xl">
          Discover the latest happenings at our restaurant. From live music to exclusive wine tastings, our events are crafted to provide you with unforgettable experiences.
        </p>
      </motion.div>

      {/* Events Section */}
      <div className="flex-grow">
        <div className="container mx-auto px-6 py-12 grid gap-8 lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Event Icon */}
              <div className="flex-shrink-0">{event.icon}</div>

              {/* Event Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-red-700 py-8 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button className="py-4 px-10 bg-white text-red-700 text-lg font-semibold rounded-lg hover:bg-gray-100 transform transition duration-300 hover:scale-105">
          Reserve Your Spot
        </button>
      </motion.div>
    </div>
  );
}

export default EventsPage;
