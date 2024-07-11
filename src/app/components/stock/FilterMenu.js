import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import axios from 'axios';

const FilterMenu = ({ filters, setFilters, applyFilters, clearFilters }) => {
  const [modelTypes, setModelTypes] = useState([]);
  const [driveTypes, setDriveTypes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const modelTypeResponse = await axios.get('http://localhost:5000/api/cars/modelTypes');
        setModelTypes(modelTypeResponse.data);
        const driveTypeResponse = await axios.get('http://localhost:5000/api/cars/driveTypes');
        setDriveTypes(driveTypeResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

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
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>

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
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Minimum Mileage</label>
            <input
              type="number"
              name="minMileage"
              value={filters.minMileage || ''}
              onChange={(e) => handleFilterChange('minMileage', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter minimum mileage"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Maximum Mileage</label>
            <input
              type="number"
              name="maxMileage"
              value={filters.maxMileage || ''}
              onChange={(e) => handleFilterChange('maxMileage', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter maximum mileage"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={applyFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
