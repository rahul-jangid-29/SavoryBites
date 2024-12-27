import React from "react";

function ServicesPage() {
  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-4">We offer a variety of services tailored to your needs.</p>
        
        {/* Add the details of your services here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Service 1</h3>
            <p className="text-gray-700">Description of service 1.</p>
          </div>

          <div className="service-card p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Service 2</h3>
            <p className="text-gray-700">Description of service 2.</p>
          </div>

          <div className="service-card p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Service 3</h3>
            <p className="text-gray-700">Description of service 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
