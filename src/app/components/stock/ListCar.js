'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const ListCar = ({ car }) => {
  const router = useRouter();

  if (!car) {
    console.error("The 'car' prop is not defined.");
    return null;
  }

  const { id, imageUrl, name, details, year, distance, type, isNew } = car;

  const handleContact = () => {
    router.push(`/cars/${id}`);
  };

  const handleNavigate = () => {
    router.push('/loan-calculator');
  };

  return (
    <motion.div
      initial={{ x: -300, opacity: 0.5 }}
      animate={{ x:10, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center border-2 border-yellow-700 p-4 rounded-lg shadow-md mb-4 bg-gray-100 hover:scale-105 cursor-pointer"
      onClick={handleContact}
    >
      <div className="flex items-center space-x-4">
        <img className="w-30 h-30 object-cover rounded-full" src={imageUrl} alt={name} />
        <div>
          <h2 className="text-xl font-semibold">{name} ({year})</h2>
          <p className='hidden sm:block'>{details}</p>
          <p className='hidden sm:block'>Distance: {distance} km</p>
          <p className='hidden sm:block'>Type: {type}</p>
          <p className='hidden sm:block'>Status: {isNew ? 'New' : 'Used'}</p>
        </div>
      </div>
      <div className="mt-8">
        <div className='flex justify-end items-center sm:block'>
          <button
            onClick={handleContact}
            className="bg-accent px-4 py-2 rounded-md mr-2 text-white"
          >
            Contact for Price
          </button>
          <button
            onClick={handleNavigate}
            className="text-blue-700 hover:underline"
          >
            Calculate Financing
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ListCar;
