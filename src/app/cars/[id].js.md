'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const CarDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Fetch the car ID from the URL
  // Fetch car details using the car ID (replace with your own data fetching logic)
  const car = {
    id,
    name: "Toyota Prius",
    imageUrl: "https://example.com/car-image.jpg",
    year: 2020,
    distance: 5000,
    type: "Sedan",
    isNew: true,
    description: "A reliable and fuel-efficient sedan perfect for city driving.",
    price: "KSH 2,000,000",
    features: ["Bluetooth", "Air Conditioning", "GPS Navigation"],
    contact: "+254700888666",
    email: "info@zawadimotors.com",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <img className="w-full h-64 object-cover" src={car.imageUrl} alt={car.name} />
          {car.isNew && (
            <div className="absolute top-2 right-2 bg-green-500 text-white py-1 px-2 rounded-md">
              New
            </div>
          )}
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
          <p className="text-gray-700 mb-4">
            Year: {car.year} | Distance: {car.distance} km | Type: {car.type}
          </p>
          <p className="text-gray-700 mb-4">{car.description}</p>
          <h2 className="text-2xl font-semibold mb-2">{car.price}</h2>
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside mb-4">
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-700">Phone: {car.contact}</p>
            <p className="text-gray-700">Email: {car.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
