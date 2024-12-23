import React, { useState } from "react";
import Button from './Button';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 bg-white shadow-md w-full z-50">
      <div className="flex justify-between items-center p-6 md:flex-row">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">TriFusion</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-900">
            Explore
          </a>
          <a href="#articles" className="text-gray-700 hover:text-blue-900">
            Articles
          </a>
          <a href="#community" className="text-gray-700 hover:text-blue-900">
            Community
          </a>
          <a href="#support" className="text-gray-700 hover:text-blue-900">
            Support
          </a>
        </div>

        {/* Desktop "Start trial" button */}
        <div className="hidden md:flex justify-end">
          <Button>Start Trial</Button>
        </div>

        {/* Hamburger menu */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-0 w-full bg-white shadow-lg`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-900"
              onClick={toggleMenu}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-900"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#download"
              className="text-gray-700 hover:text-blue-900"
              onClick={toggleMenu}
            >
              Download
            </a>
          </li>
        </ul>
        <div className="flex justify-center py-4">
          <button className="bg-blue-500 text-white rounded-full px-6 py-2">
            Start trial
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
