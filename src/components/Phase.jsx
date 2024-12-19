import React, { useState } from 'react';
import WorkoutList from './WorkoutList';

const Phase = ({ title, weeks, workouts }) => {
  const [isOpen, setIsOpen] = useState(false);  // Default phase is closed

  const togglePhase = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center p-4 bg-blue-100 cursor-pointer hover:bg-blue-200"
        onClick={togglePhase}
      >
        <h3 className="text-xl font-semibold text-gray-800">{title} ({weeks} Weeks)</h3>
        <span className="text-lg text-blue-600">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <WorkoutList workouts={workouts} weeks={weeks} />}
    </div>
  );
};

export default Phase;
