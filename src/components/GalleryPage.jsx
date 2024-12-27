import React, { useState } from "react";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery4 from "../assets/gallery4.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery6 from "../assets/gallery6.webp";

const images = [
  { src: gallery1, description: "Delicious Pasta Dish" },
  { src: gallery2, description: "Bartender Mixing Cocktails" },
  { src: gallery3, description: "Restaurant Interior" },
  { src: gallery4, description: "Live Music Event" },
  { src: gallery5, description: "Chef Preparing Food" },
  { src: gallery6, description: "Birthday Celebration" }
];

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null); // To manage selected image for modal

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={image.src}
              alt={`Gallery ${index}`}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              onClick={() => handleImageClick(image.src)} // Open modal on click
              loading="lazy" // Lazy loading for images
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
              <span className="text-white text-lg">{image.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-500">
          <div className="relative w-full max-w-4xl mx-auto p-4 bg-white rounded-lg opacity-100 transform transition-all duration-300 ease-in-out">
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
