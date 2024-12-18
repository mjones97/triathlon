import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ onToggle, isDarkMode }) => {
  return (
    <button
      onClick={onToggle}
      className={`absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white shadow-md transition duration-300 hover:bg-gray-700 ${
        isDarkMode ? "border-2 border-white" : ""
      }`}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
