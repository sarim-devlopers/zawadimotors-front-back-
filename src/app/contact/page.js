"use client"
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/contact'


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
      <main className="container mx-auto pt-20 pb-10 p-4">
        {/* Main content goes here */}
        <div>
       <Contact/>
      </div>
      </main>)}
      <Footer />
    </>
  );
}
