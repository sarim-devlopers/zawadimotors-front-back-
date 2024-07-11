import React, { useState, useEffect } from 'react';

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.description.substring(0, 100)}...</p>
            <div className="text-sm text-gray-500">
              <span>By {blog.author}</span>
              <span className="ml-2">{new Date(blog.date).toLocaleDateString()} {new Date(blog.date).toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
