// src/app/page.js
"use client";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loader from './components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <main className="container mx-auto pt-20 pb-10 p-4 flex flex-col min-h-screen">
          {/* Main content goes here */}
          <div className='flex flex-col min-h-screen'>
            <Hero />
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
