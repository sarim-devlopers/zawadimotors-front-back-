// src/components/FAQCard.js
 "use client";
// src/components/FAQCard.js
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent('I would like to book a test drive.');
    window.open(`https://wa.me/<YOUR_PHONE_NUMBER>?text=${message}`, '_blank');
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 my-2 cursor-pointer transition-all duration-300 ease-in-out" onClick={toggleCard}>
      <div className="flex justify-between items-center font-bold">
        <span>{question}</span>
        <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="mt-2 pt-2 border-t border-gray-200">
          <p>{answer}</p>
        
        </div>
      )}
    </div>
  );
};

export default FAQCard;

