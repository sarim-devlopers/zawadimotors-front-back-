'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FilterMenu from './FilterMenu';
import CarCard from '../ui/Card';
import ListCar from './ListCar';
import SearchBar from './StockSearch';
import SearchResults from './searchResult';
import Pagination from './TotalResult';
import { FaTh, FaList } from 'react-icons/fa';

const ITEMS_PER_PAGE = 8; // Define items per page for grid view
const LIST_ITEMS_PER_PAGE = 5; // Define items per page for list view

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchKeyword, setSearchKeyword] = useState('');
  const [viewMode, setViewMode] = useState('list'); // default is 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars');
        setCars(response.data);
        setFilteredCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = filteredCars.length;
  const itemsPerPage = viewMode === 'grid' ? ITEMS_PER_PAGE : LIST_ITEMS_PER_PAGE;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = filteredCars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const applyFilters = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars/filteredCars', {
        params: filters,
      });
      setFilteredCars(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error applying filters', error);
    }
  };

  const clearFilters = () => {
    setFilters({});
    setFilteredCars(cars);
    setCurrentPage(1);
  };

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto p-4 py-20">
      <div className="flex items-center">
        <div className="flex-grow">
          <FilterMenu
            filters={filters}
            setFilters={setFilters}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />
        </div>
      </div>
      <div className="ml-auto w-full max-w-sm hidden sm:block pl-20">
        <SearchBar handleSearch={handleSearch} />
        <SearchResults results={searchResults} />
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
        ) : (
          currentItems.map((car) => (
            <ListCar
              key={car.id}
              id={car.id}
              imageUrl={car.image}
              name={car.name}
              details={car.driveType}
              year={car.year}
              distance={car.distance}
              type={car.type}
              isNew={car.isNew}
            />
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default IndexPage;
