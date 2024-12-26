import React from "react";

const events = [
  { title: "Live Jazz Night", date: "July 15, 2024", description: "Enjoy live music while you dine!" },
  { title: "Wine Tasting Event", date: "August 10, 2024", description: "Sample our finest wine collection." },
];

function EventsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Events</h1>
      <div className="mt-6 space-y-6">
        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="mt-2 text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
