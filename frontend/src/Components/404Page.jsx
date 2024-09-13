import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-6">
      <div className="text-center max-w-lg">
        <div className="relative">
          <svg
            className="absolute -top-16 -left-16 w-64 h-64 opacity-30"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="white" />
            <path
              fill="none"
              stroke="#6F00FF"
              strokeWidth="2"
              d="M30 70L70 30M30 30L70 70"
            />
          </svg>
          <h1 className="text-9xl font-extrabold text-white">404</h1>
          <p className="mt-6 text-2xl font-semibold text-gray-200">Oops! Page Not Found.</p>
          <p className="mt-2 text-lg text-gray-300">It seems like we can’t find what you’re looking for.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 px-8 py-3 text-lg font-semibold text-purple-600 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Return to Homepage
          </button>
        </div>
        <div className="mt-12 text-gray-400">
          <p>Need more help? Contact our <a href="/support" className="text-white underline">support team</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
