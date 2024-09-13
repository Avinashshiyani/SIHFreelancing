import React, { useEffect } from 'react';
import { FaRegHandshake, FaGlobe, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  // Simple scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-5xl font-bold animate-on-scroll">We Empower Freelancers</h1>
          <p className="mt-4 text-xl animate-on-scroll">
            Connecting businesses with the best global talent.
          </p>
        </div>
      </section>

      {/* Mission & Vision Split Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 animate-on-scroll">
          <div className="flex items-center justify-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To empower individuals and businesses by providing the tools and opportunities needed to succeed in the global workforce.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6">
            <div>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg"
                src="https://via.placeholder.com/400"
                alt="Mission Image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-5 bg-gray-50 animate-on-scroll">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="group hover:scale-105 transform transition-all duration-300">
            <FaUsers size={50} className="text-purple-600 mx-auto" />
            <h3 className="text-5xl font-bold text-purple-600 mt-4">10M+</h3>
            <p className="mt-2 text-gray-600">Freelancers</p>
          </div>
          <div className="group hover:scale-105 transform transition-all duration-300">
            <FaRegHandshake size={50} className="text-purple-600 mx-auto" />
            <h3 className="text-5xl font-bold text-purple-600 mt-4">1M+</h3>
            <p className="mt-2 text-gray-600">Jobs Posted</p>
          </div>
          <div className="group hover:scale-105 transform transition-all duration-300">
            <FaGlobe size={50} className="text-purple-600 mx-auto" />
            <h3 className="text-5xl font-bold text-purple-600 mt-4">500K+</h3>
            <p className="mt-2 text-gray-600">Businesses</p>
          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 animate-on-scroll">Our Team</h2>
          <div className="flex space-x-6 overflow-x-auto mt-10 p-4 animate-on-scroll">
            {/* Team Member */}
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-lg text-center w-60">
              <img
                className="w-24 h-24 mx-auto rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-lg text-center w-60">
              <img
                className="w-24 h-24 mx-auto rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-lg text-center w-60">
              <img
                className="w-24 h-24 mx-auto rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Add more team members as needed */}
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-lg text-center w-60">
              <img
                className="w-24 h-24 mx-auto rounded-full"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 animate-on-scroll">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6">
            <div>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg"
                src="https://via.placeholder.com/400"
                alt="Vision Image"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                To create a world where individuals have access to limitless opportunities and businesses can seamlessly collaborate with talented professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16 px-5">
        <div className="max-w-6xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold">Join Us Today</h2>
          <p className="mt-4 text-lg">
            Ready to explore new opportunities or find the right talent? Sign up and start your journey with us today.
          </p>
          <a
            href="/signup"
            className="inline-block mt-8 bg-white text-purple-600 py-3 px-8 rounded-full font-bold transition hover:bg-gray-100 animate-on-scroll"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
