'use client';
import React from 'react';
import AutoSlidingCarousel from './AutoSlidingCarousel';
import CarCard from './ui/Card'; // Adjust the import path as needed
import InfoCard from './ui/InfoCard'; // Adjust the import path as needed

const Hero = () => {
  const cars = [
    {
      id: 1,
      imageUrl: '/images/carSlider/car01.png', // Example image path, adjust as needed
      name: 'Toyota Corolla',
      year: 2023,
      distance: 15000,
      type: 'Sedan',
      isNew: true,
      link: '/car-details/toyota-corolla', // Example link, adjust as needed
    },
    {
      id: 2,
      imageUrl: '/images/carSlider/car02.png',
      name: 'Honda Civic',
      year: 2022,
      distance: 20000,
      type: 'Sedan',
      isNew: false,
      link: '/car-details/honda-civic',
    },
    {
      id: 3,
      imageUrl: '/images/carSlider/car03.png',
      name: 'Ford Mustang',
      year: 2021,
      distance: 10000,
      type: 'Coupe',
      isNew: false,
      link: '/car-details/ford-mustang',
    },
   
  ];

  const cars2 = [
    {
      id: 5,
      imageUrl: '/images/carSlider/car01.png',
      name: 'Toyota Corolla',
      year: 2023,
      distance: 15000,
      type: 'Sedan',
      isNew: true,
      link: '/car-details/toyota-corolla',
    },
    {
      id: 6,
      imageUrl: '/images/carSlider/car01.png',
      name: 'Toyota Corolla',
      year: 2023,
      distance: 15000,
      type: 'Sedan',
      isNew: true,
      link: '/car-details/toyota-corolla',
    },
    {
      id: 7,
      imageUrl: '/images/carSlider/car01.png',
      name: 'Toyota Corolla',
      year: 2023,
      distance: 15000,
      type: 'Sedan',
      isNew: true,
      link: '/car-details/toyota-corolla',
    },
    {
      id: 8,
      imageUrl: '/images/carSlider/car01.png',
      name: 'Toyota Corolla',
      year: 2023,
      distance: 15000,
      type: 'Sedan',
      isNew: true,
      link: '/car-details/toyota-corolla',
    },
    {
      id: 9,
      imageUrl: '/images/carSlider/car02.png',
      name: 'Honda Civic',
      year: 2022,
      distance: 20000,
      type: 'Sedan',
      isNew: false,
      link: '/car-details/honda-civic',
    },
    {
      id: 10,
      imageUrl: '/images/carSlider/car03.png',
      name: 'Ford Mustang',
      year: 2021,
      distance: 10000,
      type: 'Coupe',
      isNew: false,
      link: '/car-details/ford-mustang',
    },
  ];

  return (
    <section className="w-full h-screen xl:h-full sm:h-[70vh]">
      <AutoSlidingCarousel />

      <div className="text-center mt-16 xl:mt-0">
        <h1 className="h1">Welcome to <span className="text-accent">Zawadi</span> Motors</h1>
        <p className="description mx-auto xl:mx-0 mb-6 xl:mb-10 font-semibold">
          Are you in the market for a new ride? Look no further than Al-Siddique Motors! Our showroom is stocked with the latest models from top brands like Toyota, Mercedes, Land Rover, and many more.
        </p>
      </div>

      <div className="text-center mt-16 xl:mt-0">
        <h1 className="h1">Featured Listings</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            imageUrl={car.imageUrl}
            name={car.name}
            year={car.year}
            distance={car.distance}
            type={car.type}
            isNew={car.isNew}
            link={car.link}
          />
        ))}
      </div>

      <div className="text-center mt-16 xl:mt-0">
        <h1 className="h1">Why <span className='text-accent'>Choose</span> us?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <InfoCard
          icon="/path/to/icon1.svg"
          heading="Wide range of brands"
          paragraph="Our inventory boasts a wide range of cars, ensuring that you’ll find the perfect vehicle to fit your lifestyle and budget. Whether you’re searching for a compact and efficient city car, a spacious family SUV, a luxurious sedan, or a powerful sports car, we have something for everyone."
        />
        <InfoCard
          icon="/path/to/icon2.svg"
          heading="Trusted by our clients"
          paragraph="Our clients trust us to provide exceptional service and reliable vehicles. With a commitment to excellence and customer satisfaction, we have earned the trust of countless individuals seeking quality automobiles."
        />
        <InfoCard
          icon="/path/to/icon3.svg"
          heading="Fast & easy financing"
          paragraph="We understand that purchasing a car is a significant investment, which is why we offer flexible financing options to make the process smooth and accessible. Our team is dedicated to helping you find the right financing solution tailored to your needs and budget."
        />
      </div>

      <div className="text-center mt-16 xl:mt-0">
        <h1 className="h1">Our Listings</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
        {cars2.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            imageUrl={car.imageUrl}
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
