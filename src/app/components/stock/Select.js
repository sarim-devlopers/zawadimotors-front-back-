import React, { useState } from 'react';
import FilterMenu from './FilterMenu';
import CarCard from '../ui/Card';
import ListCar from './ListCar';
import SearchBar from './StockSearch';
import Pagination from './TotalResult';
import { FaTh, FaList } from 'react-icons/fa';

// Dummy data for cars
const cars = [
  {
    id: 1,
    imageUrl: '/images/carSlider/car01.png',
    name: 'Toyota Corolla',
    year: 2023,
    distance: 15000,
    detail: "Good Condition car",
    type: 'Sedan',
    isNew: true,
    link: '/cars/[id]',
    features: ['Bluetooth', 'Backup Camera', 'Leather Seats'],
    contactLink: '/contact/toyota-corolla',
    calculateLink: '/loan-calculator'
  },
  {
    id: 1,
    imageUrl: '/images/carSlider/car01.png',
    name: 'Toyota Corolla',
    year: 2023,
    distance: 15000,
    detail: "Good Condition car",
    type: 'Sedan',
    isNew: true,
    link: '/cars/[id]',
    features: ['Bluetooth', 'Backup Camera', 'Leather Seats'],
    contactLink: '/contact/toyota-corolla',
    calculateLink: '/loan-calculator'
  },
  {
    id: 1,
    imageUrl: '/images/carSlider/car01.png',
    name: 'Toyota Corolla',
    year: 2023,
    distance: 15000,
    detail: "Good Condition car",
    type: 'Sedan',
    isNew: true,
    link: '/cars/[id]',
    features: ['Bluetooth', 'Backup Camera', 'Leather Seats'],
    contactLink: '/contact/toyota-corolla',
    calculateLink: '/loan-calculator'
  },
  // Add more car objects as needed
];

const ITEMS_PER_PAGE = 8; // Define items per page for grid view
const LIST_ITEMS_PER_PAGE = 5; // Define items per page for list view

const IndexPage = () => {
  // State for filters and search keyword
  const [filters, setFilters] = useState({});
  const [searchKeyword, setSearchKeyword] = useState('');
  // State for view mode
  const [viewMode, setViewMode] = useState('list'); // default is 'list'
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = cars.length;
  const itemsPerPage = viewMode === 'grid' ? ITEMS_PER_PAGE : LIST_ITEMS_PER_PAGE;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = cars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Function to handle filter application
  const applyFilters = () => {
    // Logic to apply filters and fetch filtered cars
    // Update cars array based on filters
  };

  // Function to handle search
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    // Logic to filter cars based on search keyword
    // Update cars array based on search
  };

  return (
    <div className="container mx-auto p-4 py-20">
      <div className="flex items-center">
        <div className="flex-grow">
          <FilterMenu
            filters={filters}
            setFilters={setFilters}
            applyFilters={applyFilters}
            clearFilters={() => setFilters({})}
          />
        </div>
      </div>
      <div className="ml-auto w-full max-w-sm hidden sm:block pl-20">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <hr className="my-6 border-gray-300" /> {/* Horizontal line */}

      <div className="flex items-center mb-4">
        <button
          onClick={() => setViewMode('grid')}
          className={`px-4 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600`}
        >
          <FaTh className="mr-2" />
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`ml-4 px-4 py-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600`}
        >
          <FaList className="mr-2" />
        </button>
      </div>

      <div className="flex flex-wrap justify-left items-start gap-4 mt-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((car) => (
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
        ) : (
          currentItems.map((car) => (
            <ListCar key={car.id} car={car} />
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="mt-8">
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default IndexPage;
