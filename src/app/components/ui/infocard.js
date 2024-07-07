import React from 'react';

const InfoCard = ({ icon, heading, paragraph }) => {
  return (
    <div className="py-4 p-4 bg-white shadow-sm rounded-lg flex flex-col items-center">
      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-2 ">
        <img src={icon} alt="Icon" className="w-6 h-6" />
      </div>
      <h2 className=" text-4xl mb-6 font-bold  text-center px-10 py-8">{heading}</h2>
      <p className="text-sm text-gray-700 text-center mt-2">{paragraph}</p>
    </div>
  );
};

export default InfoCard;
