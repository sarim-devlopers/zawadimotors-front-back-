import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image src="/icons/logo.svg" width={194} height={64} alt="Logo" />
        </div>

        {/* Detail Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Zawadi Motors is dedicated to providing you with the ultimate automobile buying experience. We are your #1 source for buying quality pre-owned vehicles.
            </p>
          </div>
          
          {/* Nairobi Showroom */}
          <div>
            <h3 className="font-bold mb-4">Nairobi Showroom</h3>
            <p className="text-sm">
              +254700888666 <br />
              Leading dealers in new and used cars. <br />
              <a href="mailto:info@alsiddiquemotors.com" className="underline">info@alsiddiquemotors.com</a> <br />
              Ngong Road, Al-Siddique Motors <br />
              Nairobi, NRB, Kenya
            </p>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="font-bold mb-4">Additional Info</h3>
            <p className="text-sm">
              Additional details or links can go here.
            </p>
          </div>

          {/* More Info */}
          <div>
            <h3 className="font-bold mb-4">More Info</h3>
            <p className="text-sm">
              More information or resources can be added here.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mt-8 space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTiktok size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 sm:mt-8">
        <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Zawadi Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
