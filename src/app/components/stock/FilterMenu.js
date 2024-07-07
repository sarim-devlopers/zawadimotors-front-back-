import React, { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { getModelTypes, getDriveTypes } from '../../../../data'; // Adjust path as needed

const FilterMenu = ({ filters, setFilters, applyFilters, clearFilters }) => {
  const [isOpen, setIsOpen] = useState(false); // State for open/closed menu
  const modelTypes = getModelTypes(); // Fetch model types from data.js
  const driveTypes = getDriveTypes(); // Fetch drive types from data.js

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <h2 className="text-xl font-semibold mb-2">Filter Options</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </div>

      {isOpen && (
        <div className="mt-4">
          {/* Model Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Model Type</label>
            <Select
              name="modelType"
              value={filters.modelType || ''}
              onChange={(value) => handleFilterChange('modelType', value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <SelectItem value="">Select Model Type</SelectItem>
              {modelTypes.map((type) => (
                <SelectItem key={type.key} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Drive Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Drive Type</label>
            <Select
              name="driveType"
              value={filters.driveType || ''}
              onChange={(value) => handleFilterChange('driveType', value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <SelectItem value="">Select Drive Type</SelectItem>
              {driveTypes.map((type) => (
                <SelectItem key={type.key} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Additional Filters */}
            {/* Price Range Slider */}
      <div className="mb-4">
        <label className="block text-gray-700">Price Range (USD)</label>
        <div className="flex items-center mt-1">
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice || ''}
            onChange={handleFilterChange}
            placeholder="Min"
            className="border border-gray-300 rounded-md p-1 w-1/2 mr-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice || ''}
            onChange={handleFilterChange}
            placeholder="Max"
            className="border border-gray-300 rounded-md p-1 w-1/2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Mileage */}
      <div className="mb-4">
        <label className="block text-gray-700">Mileage (km)</label>
        <input
          type="number"
          name="mileage"
          value={filters.mileage || ''}
          onChange={handleFilterChange}
          placeholder="Enter Mileage"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
          {/* You can add more filters here based on your requirements */}
        </div>
      )}

      <div className="flex justify-end mt-4">
        {/* Apply Filters Button */}
        <button
          className="bg-accent text-white px-4 py-2 rounded-md mr-2 hover:bg-accent-dark"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
        {/* Clear All Filters Button */}
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          onClick={clearFilters}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
