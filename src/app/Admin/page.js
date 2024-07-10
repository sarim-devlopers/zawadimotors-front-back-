"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminForm from '../components/Admin';
import CarCard from '../components/ui/Card';
import Modal from '../components/Modal';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };

  const handleUpdate = async (updatedCar) => {
    try {
      await axios.put(`http://localhost:5000/api/cars/${updatedCar._id}`, updatedCar);
      fetchCars();
      closeModal();
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  useEffect(() => {
    // Fetch cars and set loading state
    const loadData = async () => {
      await fetchCars();
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <main className="container mx-auto pt-20 pb-10 p-4">
          <div>
            <AdminForm fetchCars={fetchCars} />
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
                {cars.map((car) => (
                  <div key={car._id} className="relative">
                    <CarCard
                      id={car._id}
                      imageUrl={car.image}
                      name={car.name}
                      year={car.year}
                      distance={car.distance}
                      type={car.type}
                      isNew={car.isNew}
                    />
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handleDelete(car._id)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => openModal(car)}
                        className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
      {isModalOpen && (
        <Modal
          car={selectedCar}
          onClose={closeModal}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}
