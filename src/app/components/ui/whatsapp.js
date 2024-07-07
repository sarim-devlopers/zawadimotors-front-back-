// src/components/BookTestDriveButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BookTestDriveButton = () => {
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent('I would like to book a test drive.');
    window.open(`https://wa.me/<YOUR_PHONE_NUMBER>?text=${message}`, '_blank');
  };

  return (


    <button 
      onClick={handleWhatsAppRedirect}
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp className="mr-2" /> Book Test Drive
    </button>

   
  );
};

export default BookTestDriveButton;
