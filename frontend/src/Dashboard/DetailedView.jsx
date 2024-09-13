import React from "react";
import Navbar from "../Navbar/Navbar";

const DetailedView = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pt-[60px]">
        {/* Main Container */}
        <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8">
          {/* Profile/Project Overview */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6">
              {/* Profile Image */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#6F00FF] shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  John Doe
                </h2>
                <p className="text-gray-500 mt-1 text-lg">
                  Expert in Web Development
                </p>
                <div className="flex items-center mt-3">
                  {/* Rating */}
                  <span className="text-yellow-400 text-xl">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                  <span className="ml-2 text-gray-600 text-base">(4.5/5)</span>
                </div>

                {/* Quick Stats */}
                <div className="mt-4 flex flex-wrap gap-4 text-base text-gray-600">
                  <div>
                    <strong>Location:</strong> New York, USA
                  </div>
                  <div>
                    <strong>Rate:</strong> $50/hour
                  </div>
                  <div>
                    <strong>Experience:</strong> 5+ years
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-0 sm:ml-6 flex space-x-4">
                {/* Hire Freelancer Button */}
                <button className="bg-[#6F00FF] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#5a00cc] focus:outline-none focus:ring-2 focus:ring-[#5a00cc] focus:ring-opacity-50 transition-transform transform hover:scale-105">
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7M7 13l2 2 6-6"
                      />
                    </svg>
                    <span>Hire Freelancer</span>
                  </span>
                </button>

                {/* Message Button */}
                <button className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition-transform transform hover:scale-105">
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M4 10h.01M12 16h.01M16 16h.01M8 16h.01M4 16h.01M12 4h.01M16 4h.01M8 4h.01M4 4h.01"
                      />
                    </svg>
                    <span>Message</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8">
            <div className="border-b border-gray-300 mb-6">
              <nav className="flex space-x-6 text-lg font-medium">
                <a
                  href="#about"
                  className="text-[#6F00FF] border-b-2 border-[#6F00FF] pb-2"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-[#6F00FF] pb-2"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-[#6F00FF] pb-2"
                >
                  Experience
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-600 hover:text-[#6F00FF] pb-2"
                >
                  Portfolio
                </a>
                <a
                  href="#reviews"
                  className="text-gray-600 hover:text-[#6F00FF] pb-2"
                >
                  Reviews
                </a>
              </nav>
            </div>

            {/* About Section */}
            <div
              id="about"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                About the Freelancer/Project
              </h3>
              <p className="text-gray-700 leading-relaxed">
                John is a seasoned web developer with over 5 years of experience
                in front-end and back-end technologies. He specializes in
                building scalable web applications with React, Node.js, and
                Tailwind CSS.
              </p>
              <img
                src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"
                alt="About"
                className="w-full mt-4 rounded-lg shadow-md"
              />
            </div>

            {/* Skills Section */}
            <div
              id="skills"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#6F00FF] text-white font-semibold py-1 px-3 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-[#6F00FF] text-white font-semibold py-1 px-3 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#6F00FF] text-white font-semibold py-1 px-3 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-[#6F00FF] text-white font-semibold py-1 px-3 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Experience Section */}
            <div
              id="experience"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Experience
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  Developed scalable e-commerce platforms using MERN stack.
                </li>
                <li>
                  Built and maintained front-end libraries for large
                  organizations.
                </li>
                <li>
                  Led a team of 5 developers for a high-profile banking project.
                </li>
              </ul>
            </div>

            {/* Portfolio Section */}
            <div
              id="portfolio"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Portfolio
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
                    alt="Portfolio item 1"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1181247/pexels-photo-1181247.jpeg"
                    alt="Portfolio item 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3746761/pexels-photo-3746761.jpeg"
                    alt="Portfolio item 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div
              id="reviews"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Reviews
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "John did an excellent job. The project was delivered on
                    time and exceeded expectations."
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>
                    <span className="ml-2 text-gray-600">By Client A</span>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "Great communication and high-quality work. Will definitely
                    hire again!"
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">
                      &#9733;&#9733;&#9733;&#9733;&#9734;
                    </span>
                    <span className="ml-2 text-gray-600">By Client B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedView;
