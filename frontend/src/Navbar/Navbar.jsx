import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand or Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Workera</h1>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
            >
              <AiOutlineMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items for larger screens */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Messages
            </a>
          </nav>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      <div
        className={`${
          isOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-600 ease-out bg-white `}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Jobs
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Messages
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
