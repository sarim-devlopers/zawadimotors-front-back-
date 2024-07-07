'use client'
import React, { useState, useEffect } from 'react';

const BlogImageSlide = () => {
  const images = [
    "https://media.discordapp.net/attachments/925444232712433745/1259381647514796133/ALL_NEW_UPDATES.png?ex=668b7a0e&is=668a288e&hm=5f7024e53118d6578c561443257d19013156659356c04310d39067194741690c&=&format=webp&quality=lossless&width=756&height=424",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-96 md:h-screen lg:h-[90vh]">
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogImageSlide;
