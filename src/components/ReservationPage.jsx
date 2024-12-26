import React from "react";

function ReservationPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Make a Reservation</h1>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="block w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="block w-full p-3 border rounded-lg" />
        <input type="date" className="block w-full p-3 border rounded-lg" />
        <input type="time" className="block w-full p-3 border rounded-lg" />
        <button className="bg-red-500 px-6 py-3 rounded-lg text-white">Book Now</button>
      </form>
    </div>
  );
}

export default ReservationPage;
