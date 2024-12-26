import React from "react";

const menuItems = [
  { id: 1, name: "Pizza", description: "Cheesy and delicious", price: 10, image: "/menu-pizza.jpg" },
  { id: 2, name: "Burger", description: "Juicy and tasty", price: 8, image: "/menu-burger.jpg" },
];

function MenuPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {menuItems.map((item) => (
        <div key={item.id} className="group bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover group-hover:scale-110 transition-transform" />
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <span className="block mt-2 text-red-500 font-bold">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuPage;
