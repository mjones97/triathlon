import React, { useState } from 'react';
import WorkoutList from './WorkoutList';

const Phase = ({ title, weeks, workouts, onToggleCompletion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePhase = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center py-4 px-8 bg-blue-100 cursor-pointer hover:bg-blue-200"
        onClick={togglePhase}
        aria-expanded={isOpen}
        aria-controls={`phase-${title}`}
      >
        <h3 className="text-xl font-semibold text-gray-800">{title} ({weeks} Weeks)</h3>
        <span className="text-lg text-blue-600">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div id={`phase-${title}`} className="transition-all">
          <WorkoutList workouts={workouts} weeks={weeks} onToggleCompletion={onToggleCompletion} />
        </div>
      )}
    </div>
  );
};

export default Phase;
