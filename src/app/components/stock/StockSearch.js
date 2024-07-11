'use client';
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/cars/search?term=${searchTerm}`);
      handleSearch(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l-5.003 5.004m5.003-5.004a6 6 0 11-8.485-8.485 6 6 0 018.485 8.485z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
