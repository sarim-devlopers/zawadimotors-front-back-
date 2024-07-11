'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AutoSlidingCarousel from './AutoSlidingCarousel';
import CarCard from './ui/Card'; // Adjust the import path as needed
import InfoCard from './ui/InfoCard'; // Adjust the import path as needed
// Adjust the import path as needed

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  useEffect(() => {
    // Fetch cars and set loading state
    const loadData = async () => {
      await fetchCars();
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <section className="w-full h-full sm:h-auto pt-8">
      <div className="hidden sm:block">
        <AutoSlidingCarousel />
      </div>

      <div className="text-center mt-8 sm:mt-16">
        <h1 className="h1">Welcome to <span className="text-accent">Zawadi</span> Motors</h1>
        <p className="text-base sm:text-lg mx-auto sm:mx-0 mb-4 sm:mb-6 font-semibold">
        Rev up your dreams at Zawadi Motors! Our showroom boasts an impressive lineup of the latest models from top brands, including Toyota, Mercedes, and Land Rover. Whether you’re seeking luxury, performance, or reliability, we’ve got the perfect ride waiting for you.
        </p>
      </div>

      <div className="text-center mt-8 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold">Featured Listings</h1>
      </div>
  {/* <FeaturedCard/> */}
  
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 p-4">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            imageUrl={car.image}
            name={car.name}
            year={car.year}
            distance={car.distance}
            type={car.type}
            isNew={car.isNew}
            link={car.link}
          />
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-16">
        <h1 className="h1 sm:text-4xl font-bold">Why <span className='text-accent'>Choose</span> us?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
        <InfoCard
          icon="/trusted1.png"
          heading="Wide range of brands"
          paragraph="Our inventory boasts a wide range of cars, ensuring that you’ll find the perfect vehicle to fit your lifestyle and budget. Whether you’re searching for a compact and efficient city car, a spacious family SUV, a luxurious sedan, or a powerful sports car, we have something for everyone."
        />
        <InfoCard
          icon="/trusted2.png"
          heading="Trusted by our clients"
          paragraph="Our clients trust us to provide exceptional service and reliable vehicles. With a commitment to excellence and customer satisfaction, we have earned the trust of countless individuals seeking quality automobiles."
        />
        <InfoCard
          icon="trusted3.png"
          heading="Fast & easy financing"
          paragraph="We understand that purchasing a car is a significant investment, which is why we offer flexible financing options to make the process smooth and accessible. Our team is dedicated to helping you find the right financing solution tailored to your needs and budget."
        />
      </div>

      <div className="text-center mt-8 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold">Our Listings</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 p-4">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            imageUrl={car.image}
            name={car.name}
            year={car.year}
            distance={car.distance}
            type={car.type}
            isNew={car.isNew}
            link={car.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
