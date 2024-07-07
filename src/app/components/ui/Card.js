'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const CarCard = ({ id, imageUrl, name, year, distance, type, isNew }) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (typeof window !== 'undefined') {
      router.push(`/cars/${id}`); // Navigate to the specified link with car ID
    }
  };

  const slideInBlink = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0, 1, 0.5, 1],
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-lg overflow-hidden shadow-lg m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer bg-white border-2 border-gray-300"
      onClick={handleCardClick}
      variants={slideInBlink}
      initial="hidden"
      animate="visible"
    >
      {isNew && (
        <div className="absolute top-2 right-2 bg-green-600 text-white py-1 px-3 rounded-md">
          New
        </div>
      )}
      <img className="w-full h-64 object-cover" src={imageUrl} alt={name} />
      <div className="px-8 py-6 text-center">
        <div className="font-bold text-2xl mb-4 text-gray-800">{name}</div>
        <p className="text-gray-600 text-base mb-2">
          Year: {year} | Distance: {distance} km
        </p>
        <p className="text-gray-600 text-base mb-4">Type: {type}</p>
      </div>
      <div className="px-8 py-6 text-center">
        <span className="inline-block bg-yellow-500 rounded-full px-5 py-2 text-sm font-semibold text-white">
          Contact for Price
        </span>
      </div>
    </motion.div>
  );
};

export default CarCard;
