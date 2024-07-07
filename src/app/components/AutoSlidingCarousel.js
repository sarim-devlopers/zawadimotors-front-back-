'use client'
import React, { useState, useEffect } from 'react';

const AutoSlidingCarousel = () => {
    const images = [
       "https://media.discordapp.net/attachments/925444232712433745/1259121359540322344/pexels-photo-88630.png?ex=668a87a5&is=66893625&hm=f7b9369d780587d313c12f2b70ba306be8410c2cdb01ae4d5e026779cfb54ac7&=&format=webp&quality=lossless&width=721&height=481",
       
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="section">
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

export default AutoSlidingCarousel;
