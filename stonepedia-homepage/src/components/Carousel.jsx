import React, { useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    "https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg",
    "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
    "https://images.pexels.com/photos/4705933/pexels-photo-4705933.jpeg",
    "https://stonepedia.in/wp-content/uploads/2023/04/Marble-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold font-serif text-center px-4">
          Experience The World Of Natural Stones Like Never Before
        </h1>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
