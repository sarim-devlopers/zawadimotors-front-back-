"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import { FaPaperPlane, FaWhatsapp, FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

const CarDetails = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = params;

  useEffect(() => {
    // Fetch car details from the backend
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${id}`);
        setCar(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setLoading(false); // In case of error, stop loading as well
      }
    };

    fetchCarDetails();

    return () => clearTimeout(); // Clear any pending timers if the component unmounts
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (car?.images.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (car?.images.length || 1)) % (car?.images.length || 1));
  };

  if (loading) {
    return (
      <section className="w-full h-screen xl:h-full sm:h-[70vh]">
        <Header />
        <Loader />
      </section>
    );
  }
console.log(car) //this is showing null
  if (!car) {
    return (
      <section className="w-full h-screen xl:h-full sm:h-[70vh]">
        <Header />
        <div className="container mx-auto py-28 text-center">
          <h1 className="text-3xl font-bold mb-4">Car not found</h1>
          <p className="text-lg">The car you're looking for doesn't exist.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-screen xl:h-full sm:h-[70vh]">
      <Header />
      <div className="container mx-auto py-28">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
            <p className="text-lg mb-2">Year: {car.year} | Distance: {car.distance} km | Type: {car.type}</p>
            <div className="border-b-2 border-gray-300 my-4"></div>
            <div className="relative">
              <img src={car.images[currentImageIndex]} alt={car.name} className="w-full h-auto mb-4" />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                <FaArrowRight />
              </button>
              <div className="absolute bottom-8 left-0 right-0 flex justify-left p-2 bg-black bg-opacity-0 text-black">
                {currentImageIndex + 1}/{car.images.length}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-black bg-opacity-0 space-x-2">
                {car.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-full cursor-pointer transform transition duration-300 ${
                      index === currentImageIndex ? 'ring-4 ring-gray-200' : 'hover:scale-110 hover:ring-2 hover:ring-white'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-8">
            <h1 className="h2">Contact for a price</h1>
            <div className="text-lg mb-2 bg-gray-100 p-6 rounded-lg ">
              <p><strong>Make:</strong> {car.make}</p>
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Drive Type:</strong> {car.driveType}</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Condition:</strong> {car.condition}</p>
              <p><strong>Year:</strong> {car.year}</p>
              <p><strong>Mileage:</strong> {car.mileage}</p>
              <p><strong>Fuel Type:</strong> {car.fuelType}</p>
              <p><strong>Engine Size:</strong> {car.engineSize}</p>
              <p><strong>Doors:</strong> {car.doors}</p>
            </div>
            <a
              href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-green-600 "
            >
              Contact via WhatsApp <FaWhatsapp className="ml-2" />
            </a>
            <form className="bg-gray-100 p-6 rounded-lg shadow-md ">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input type="tel" id="phone" placeholder="Your Phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message <span className="text-red-500">*</span></label>
                <textarea id="message" placeholder="Your Message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" required></textarea>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" required />
                  <span className="ml-2 text-gray-700">I agree to the <a href="/privacy-policy" className="text-indigo-600 underline">privacy policy</a></span>
                </label>
              </div>
              <button type="submit" className="w-full bg-accent text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-accent-dark">
                Send <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 bg-gray-300">
          <h2 className="text-2xl font-bold mb-4 bg-white">Safety Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {car.safetyFeatures.map((feature, index) => (
              <li key={index} className="mb-1 flex items-center">
                <FaCheck className="text-green-500 mr-2 bg-white" />
                <span className='bg-white rounded-lg p-2'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 bg-gray-300 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 bg-white">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {car.features.map((feature, index) => (
              <li key={index} className="mb-1 flex items-center ">
                <FaCheck className="text-green-500 mr-2 bg-white " />
                <span className='bg-white rounded-lg p-2'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
