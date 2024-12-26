import React from "react";

function ContactUsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="block w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="block w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="block w-full p-3 border rounded-lg"></textarea>
        <button className="bg-red-500 px-6 py-3 rounded-lg text-white">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
