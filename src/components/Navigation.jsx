import React from "react";
import { FaHome, FaCalendarCheck, FaChartLine, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = ({ isDarkMode }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } shadow-lg`}
    >
      <div className="flex justify-around items-center py-2">
        <Link to="/" className="flex flex-col items-center gap-1 text-xl">
          <FaHome />
          <span className="text-sm block">Home</span>
        </Link>

        <Link to="/training-plan" className="flex flex-col items-center gap-1 text-xl">
          <FaCalendarCheck />
          <span className="text-sm block">Plan</span>
        </Link>

        <div className="flex flex-col items-center gap-1 text-xl">
          <FaChartLine />
          <span className="text-sm block">Log</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-xl">
          <FaCog />
          <span className="text-sm block">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
