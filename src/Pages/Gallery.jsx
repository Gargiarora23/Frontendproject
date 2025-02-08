import React, { useState } from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";

const images = [
  { id: 1, category: "tours", src: gallery1, size: "small" },
  { id: 2, category: "tours", src: gallery2, size: "large" },
  { id: 3, category: "cruises", src: gallery3, size: "small" },
  { id: 4, category: "hotels", src: gallery4, size: "small" },
  { id: 5, category: "hotels", src: gallery5, size: "small" },
  { id: 6, category: "tours", src: gallery6, size: "small" },
  { id: 7, category: "cruises", src: gallery7, size: "small" },
  { id: 8, category: "hotels", src: gallery8, size: "large" },
  { id: 9, category: "tours", src: gallery9, size: "small" },
  { id: 10, category: "hotels", src: gallery10, size: "large" },
  { id: 11, category: "cruises", src: gallery11, size: "small" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
  
 <div className="p-3 max-w-screen-lg mx-auto mt-5">
  <div className="flex flex-wrap justify-center mb-4 gap-2 md:space-x-4">
    {[
      { label: "All", value: "all" },
      { label: "Tours", value: "tours" },
      { label: "Cruises", value: "cruises" },
      { label: "Hotels", value: "hotels" },
    ].map((btn) => (
      <button
        key={btn.value}
        className={`px-4 py-2 font-semibold rounded-md transition-all duration-300 ${
          filter === btn.value
            ? "bg-teal-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-teal-400 hover:text-white"
        }`}
        onClick={() => setFilter(btn.value)}
      >
        {btn.label}
      </button>
    ))}
  </div>

      {/* Image Grid */}
      <div className="grid py-6 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className={`relative overflow-hidden rounded-lg cursor-pointer ${
              img.size === "large" ? "row-span-2 col-span-2" : ""
            }`}
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt=""
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-teal-500 bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-white font-bold text-lg ">CANNES, FRANCE</p>
            </div>
          </div>
        ))}
      </div>


      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
    </div> 
  );
};

export default Gallery;
