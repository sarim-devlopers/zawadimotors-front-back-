import React from 'react';
import CarCard from '../ui/Card';
const SearchResults = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
     {results.map(car => (
        <CarCard
          key={car._id}
          id={car.id}
          imageUrl={car.image}
          name={car.name}
          year={car.year}
          distance={car.mileage}
          type={car.type}
          isNew={car.isNew}
        />
      ))}
    </div>
  );
};

export default SearchResults;
