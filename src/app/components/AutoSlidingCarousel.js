'use client';
import React, { useState, useEffect } from 'react';

const AutoSlidingCarousel = () => {
  const images = [
    "https://media.discordapp.net/attachments/959764623706435604/1260516703868031000/59b0498421aad78ca66375c3df2dd7e4.png?ex=668f9b29&is=668e49a9&hm=607b278cfa6df289717d7f9b3c9391634d389c0753968c68570b972ccf3af03a&=&format=webp&quality=lossless&width=880&height=495",
    "https://media.discordapp.net/attachments/959764623706435604/1260516769576259686/toyota-supra-neon-lights-4k-wallpaper-preview.png?ex=668f9b39&is=668e49b9&hm=972dfe099796fc7804f904c9ba36b56fa9e63cb615570ff02cef9846242e93d4&=&format=webp&quality=lossless&width=1001&height=625",
    "https://media.discordapp.net/attachments/959764623706435604/1260516812445978644/toyota-drift-supra-tuning-wallpaper-preview.png?ex=668f9b43&is=668e49c3&hm=7e4608ff225fbcf22975f070f12568289d4d2a90e7c72707a8cc38c6832a84e0&=&format=webp&quality=lossless&width=1001&height=585",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-96 md:h-[70vh] lg:h-[80vh]">
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 bg-opacity-50 bg-black">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
