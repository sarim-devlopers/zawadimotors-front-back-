import React, { useState, useEffect } from 'react';

const Modal = ({ car, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...car });

  useEffect(() => {
    setFormData({ ...car });
  }, [car]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Update Car Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Year:</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Distance:</label>
              <input
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Type:</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Image:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">New:</label>
              <input
                type="checkbox"
                name="isNew"
                checked={formData.isNew}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Images (comma separated):</label>
              <input
                type="text"
                name="images"
                value={formData.images}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Make:</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Model:</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Drive Type:</label>
              <input
                type="text"
                name="driveType"
                value={formData.driveType}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Transmission:</label>
              <input
                type="text"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Condition:</label>
              <input
                type="text"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mileage:</label>
              <input
                type="text"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fuel Type:</label>
              <input
                type="text"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Engine Size:</label>
              <input
                type="text"
                name="engineSize"
                value={formData.engineSize}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Doors:</label>
              <input
                type="text"
                name="doors"
                value={formData.doors}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Safety Features (comma separated):</label>
              <input
                type="text"
                name="safetyFeatures"
                value={formData.safetyFeatures}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Features (comma separated):</label>
              <input
                type="text"
                name="features"
                value={formData.features}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white p-2 rounded-md mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
