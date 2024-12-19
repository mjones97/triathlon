import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import TrainingPlan from "./pages/TrainingPlan";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark"); // Ensure dark class is added to html
    } else {
      document.documentElement.classList.remove("dark");
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

  const [trainingPlan, setTrainingPlan] = useState(null);

  const handleTrainingPlanAdjustment = (adjustedPlan) => {
    setTrainingPlan(adjustedPlan);
  };

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""} transition-colors duration-300`}
      >
        {/* Dark Mode Toggle Button */}
        <DarkModeToggle onToggle={toggleTheme} isDarkMode={isDarkMode} />

        <Navigation isDarkMode={isDarkMode} />

        <div className={`flex-grow flex ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
              <Route
                path="/training-plan"
                element={<TrainingPlan isDarkMode={isDarkMode} onSubmit={handleTrainingPlanAdjustment} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
