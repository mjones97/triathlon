import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ onToggle, isDarkMode }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white shadow-md transition-all duration-300 ease-in-out transform ${
        isDarkMode ? "border-2 border-white scale-110" : "scale-100"
      }`}
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
