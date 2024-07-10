// src/components/AdminForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = ({ fetchCars }) => {
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    year: '',
    distance: '',
    type: '',
    isNew: false,
    image: '',
    images: '',
    make: '',
    model: '',
    driveType: '',
    transmission: '',
    condition: '',
    mileage: '',
    fuelType: '',
    engineSize: '',
    doors: '',
    safetyFeatures: '',
    features: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/cars', {
        ...formData,
        images: formData.images.split(',').map(img => img.trim()),
        safetyFeatures: formData.safetyFeatures.split(',').map(feature => feature.trim()),
        features: formData.features.split(',').map(feature => feature.trim())
      });
      console.log('Car created:', response.data);
      fetchCars();
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Enter Car Details</h2>
      <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
          <label className="block text-gray-700">ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div className="col-span-2">g...
          <label className="block text-gray-700">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Year:</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Distance:</label>
          <input type="number" name="distance" value={formData.distance} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Image:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">New:</label>
          <input type="checkbox" name="isNew" checked={formData.isNew} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700">Images (comma separated):</label>
          <input type="text" name="images" value={formData.images} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Make:</label>
          <input type="text" name="make" value={formData.make} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Model:</label>
          <input type="text" name="model" value={formData.model} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Drive Type:</label>
          <input type="text" name="driveType" value={formData.driveType} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Transmission:</label>
          <input type="text" name="transmission" value={formData.transmission} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Condition:</label>
          <input type="text" name="condition" value={formData.condition} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Mileage:</label>
          <input type="text" name="mileage" value={formData.mileage} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Fuel Type:</label>
          <input type="text" name="fuelType" value={formData.fuelType} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Engine Size:</label>
          <input type="text" name="engineSize" value={formData.engineSize} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Doors:</label>
          <input type="text" name="doors" value={formData.doors} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700">Safety Features (comma separated):</label>
          <input type="text" name="safetyFeatures" value={formData.safetyFeatures} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700">Features (comma separated):</label>
          <input type="text" name="features" value={formData.features} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div className="col-span-2">
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Save Car</button>
        </div>
      </div>
    </form>
  );
};

export default AdminForm;
