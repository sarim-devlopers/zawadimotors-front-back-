"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminForm from '../components/blogAdminForm'; // Assuming you have an AdminForm component for creating blogs
import BlogCard from '../components/ui/BlogCard'; // Assuming you have a BlogCard component for displaying blogs
// import BlogModal from '../components/BlogModal'; // Assuming you have a BlogModal component for updating blogs

export default function BlogAdmin() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  const handleUpdate = async (updatedBlog) => {
    try {
      await axios.put(`http://localhost:5000/api/blogs/${updatedBlog._id}`, updatedBlog);
      fetchBlogs();
      closeModal();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchBlogs();
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
            <AdminForm fetchBlogs={fetchBlogs} />
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {blogs.map((blog) => (
                  <div key={blog._id} className="relative">
                    <BlogCard
                      id={blog._id}
                      imageUrl={blog.image}
                      title={blog.title}
                      description={blog.description}
                      author={blog.author}
                      date={new Date(blog.date).toLocaleDateString()}
                      time={new Date(blog.date).toLocaleTimeString()}
                    />
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => openModal(blog)}
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
      {/* {isModalOpen && (
        <BlogModal
          blog={selectedBlog}
          onClose={closeModal}
          onSave={handleUpdate}
        />
      )} */}
    </>
  );
}
