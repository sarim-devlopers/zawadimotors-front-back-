'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const ListCar = ({ id, imageUrl, name, details, year, distance, type, isNew }) => {
  const router = useRouter();

  const handleContact = () => {
    router.push(`/cars/${id}`);
  };

  const handleNavigate = () => {
    router.push('/loan-calculator');
  };

  return (
    <motion.div
      initial={{ x: -300, opacity: 0.5 }}
      animate={{ x: 10, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col sm:flex-row items-center border-2 border-yellow-700 p-4 rounded-lg shadow-md mb-4 bg-gray-100 hover:scale-105 cursor-pointer"
      onClick={handleContact}
    >
      <div className="flex items-center space-x-4 mb-4 sm:mb-0 sm:mr-4">
        <img className="w-35 h-35 sm:w-30 sm:h-30 object-cover " src={imageUrl} alt={name} />
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">{name} ({year})</h2>
          <p className='text-sm hidden sm:block'>{details}</p>
          <p className='text-sm hidden sm:block'>Distance: {distance} km</p>
          <p className='text-sm hidden sm:block'>Type: {type}</p>
          <p className='text-sm hidden sm:block'>Status: {isNew ? 'New' : 'Used'}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-auto">
        <div className='flex flex-col sm:flex-row justify-end items-center'>
          <button
            onClick={handleContact}
            className="bg-accent px-2 py-1 sm:px-4 sm:py-2 rounded-md text-white mb-2 sm:mb-0 sm:mr-2"
          >
            Contact for Price
          </button>
          <button
            onClick={handleNavigate}
            className="text-blue-700 hover:underline text-sm"
          >
            Calculate Financing
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ListCar;
