import React, { useState } from "react";
import pizza from "../assets/pizza.webp";
import burger from "../assets/burger.webp";
import steak from "../assets/steak.webp";
import pasta from "../assets/pasta.webp";
import salad from "../assets/salad.webp";
import tacos from "../assets/tacos.webp";
import soup from "../assets/soup.webp";
import sushi from "../assets/sushi.webp";
import icecream from "../assets/ice-cream.webp";
import cake from "../assets/cake.webp";

const menuItems = [
  { id: 1, name: "Pizza", description: "Cheesy and delicious", price: 10, image: pizza },
  { id: 2, name: "Burger", description: "Juicy and tasty", price: 8, image: burger },
  { id: 4, name: "Steak", description: "Grilled to perfection", price: 20, image: steak },
  { id: 3, name: "Pasta", description: "Creamy and satisfying", price: 12, image: pasta },
  { id: 5, name: "Salad", description: "Fresh and healthy", price: 7, image: salad },
  { id: 6, name: "Tacos", description: "Spicy and flavorful", price: 9, image: tacos },
  { id: 7, name: "Soup", description: "Warm and comforting", price: 5, image: soup },
  { id: 8, name: "Sushi", description: "Fresh and delicate", price: 15, image: sushi },
  { id: 9, name: "Ice Cream", description: "Sweet and creamy", price: 4, image: icecream },
  { id: 10, name: "Cake", description: "Rich and decadent", price: 6, image: cake },
];

function MenuPage() {
  const [showAll, setShowAll] = useState(false); // To toggle between showing 6 or all items

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-[#1c1210] text-white p-6">
      {/* Menu Heading */}
      <h1 className="text-4xl font-bold text-center text-red-500 mb-8">Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuItems.slice(0, showAll ? menuItems.length : 6).map((item) => (
          <div
            key={item.id}
            className="group shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/1 backdrop-blur-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover transform transition-all duration-300 group-hover:scale-110"
            />
            <div className="p-4 text-center backdrop-blur-md bg-white/20 rounded-lg">
              <h2 className="text-xl font-semibold text-red-500">{item.name}</h2>
              <p className="text-gray-200 mt-2">{item.description}</p>
              <div className="mt-4 flex justify-center items-center">
                <span className="text-red-500 font-bold text-lg">${item.price}</span>
                <button className="ml-4 py-2 px-4 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleShowAll}
          className="py-2 px-6 bg-red-500 text-white text-lg rounded-full hover:bg-red-600 transition duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default MenuPage;
