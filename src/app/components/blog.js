import React from 'react'
import AutoSlidingCarousel from './AutoSlidingCarousel';
import BlogImageSlide from './ui/BlogImageSlide'; 
import BlogCard from './ui/BlogCard'; 
const Blog = () => {
  return (
    <section>
  <div>
    <BlogImageSlide/>
    <div className='items-center text-center py-8'>
    <h1 className='h1'>Zawadi <span className='text-accent'>Motor's</span> - Blog</h1>
    <p className='description text-cyan-800'> Showing the latest updates about Zawadi Motors</p>  
    </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-col-2'>
   <BlogCard/>
  </div>
  </div>

  </section>
  )
}

export default Blog