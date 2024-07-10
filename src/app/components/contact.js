import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-10 flex flex-col space-y-10 xl:space-y-0 xl:flex-row xl:space-x-10 container mx-auto">
      <div className="text-left xl:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Contact us</h1>
        <p className="text-lg mb-4 font-semibold">
          Leading dealers in new and used cars.
          <br />Ngong road, Al-Siddique Motors
          Nairobi, NRB, Kenya
        </p>
        <h2 className='text-2xl font-semibold mb-4'>+254700888666</h2>
        <p className="text-lg mb-6 font-semibold"> info@zawadimotors.com</p>
        <div className="flex items-center space-x-6">
          <p className="text-lg font-semibold">Follow us</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
            <FaTiktok size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      <div className="xl:w-1/2">
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
            <input type="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message <span className="text-red-500">*</span></label>
            <textarea id="message" placeholder="Your Message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500" required></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" required />
              <span className="ml-2 text-gray-700">I agree to the <a href="/stocklist" className="text-indigo-600 underline">privacy policy</a></span>
            </label>
          </div>
          <button type="submit" className="w-full bg-accent text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-accent-dark">
            Send <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
