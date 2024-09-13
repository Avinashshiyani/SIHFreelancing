import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar';

// ServiceCard Component
const ServiceCard = ({
  title,
  description,
  image,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-semibold text-lg">{price}</span>
          <button className="bg-[#6F00FF] text-white py-2 px-4 rounded-lg hover:bg-[#5d24a6] focus:outline-none">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage of ServiceCard component
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/posts'); // Ensure the correct backend endpoint
        const data = await res.json();
        
        // Check if the response was successful
        if (data.success) {
          setPosts(data.data); // Set posts state to the fetched data
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {posts.map((service, id) => (
          <ServiceCard
            key={id}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
