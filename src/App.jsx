import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Calendar from './components/Calendar';
import RightPanel from './components/RightPanel';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode was previously enabled in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}
      >
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white shadow-md transition duration-300 hover:bg-gray-700 ${
            isDarkMode ? 'border-2 border-white' : ''
          }`}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <Navigation isDarkMode={isDarkMode} />
        <div>
          <Dashboard isDarkMode={isDarkMode} />
          <RightPanel />
        </div>
        <Routes>
          <Route path="/" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
