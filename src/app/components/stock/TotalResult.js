import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="flex justify-center my-4">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 mx-1 ${page === currentPage ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
