import React from "react";

const testimonials = [
  { name: "John Doe", review: "Amazing food and fantastic service!", rating: 5 },
  { name: "Jane Smith", review: "A delightful dining experience. Highly recommend!", rating: 4 },
];

function TestimonialsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <div className="mt-6 space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p className="text-yellow-500">{`⭐`.repeat(testimonial.rating)}</p>
            <p className="mt-2 text-gray-700">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage;
