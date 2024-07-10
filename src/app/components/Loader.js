// src/components/SkeletonLoader.js
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4">
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
