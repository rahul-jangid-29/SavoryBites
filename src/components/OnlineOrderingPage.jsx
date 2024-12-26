import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Pizza', description: 'Cheesy and delicious', price: 10 },
  { id: 2, name: 'Burger', description: 'Juicy and tasty', price: 8 },
  { id: 3, name: 'Pasta', description: 'Creamy and rich', price: 12 },
];

function OnlineOrderingPage() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const removeFromOrder = (item) => {
    setOrder(order.filter(orderItem => orderItem.id !== item.id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Order Online</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <span className="block mt-2 text-red-500 font-bold">${item.price}</span>
              <button
                onClick={() => addToOrder(item)}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700"
              >
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Your Order</h2>
        <ul className="mt-4">
          {order.length === 0 ? (
            <p>No items in your order.</p>
          ) : (
            order.map((item, index) => (
              <li key={index} className="flex justify-between items-center mt-4">
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromOrder(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
        {order.length > 0 && (
          <button className="mt-6 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-700">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default OnlineOrderingPage;
