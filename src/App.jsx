import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import TrainingPlan from "./pages/TrainingPlan";
import RightPanel from "./components/RightPanel";
import DarkModeToggle from "./components/DarkModeToggle"; // Import DarkModeToggle

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <Router>
      {/* Add the `dark` class to the root div when dark mode is enabled */}
      <div
        className={`flex flex-col min-h-screen ${
          isDarkMode ? "dark" : ""
        } transition-colors duration-300`}
      >
        {/* Dark Mode Toggle Button */}
        <DarkModeToggle onToggle={toggleTheme} isDarkMode={isDarkMode} />

        <Navigation isDarkMode={isDarkMode} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
            <Route path="/training-plan" element={<TrainingPlan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
