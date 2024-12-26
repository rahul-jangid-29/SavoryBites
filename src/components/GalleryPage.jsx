import React from "react";

const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"];

function GalleryPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img src={image} alt={`Gallery ${index}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
