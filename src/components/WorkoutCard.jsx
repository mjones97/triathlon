import React from 'react';

const WorkoutCard = ({ workout, day }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow hover:bg-blue-50 transition duration-300">
      <p className="text-sm font-medium text-gray-700">Day {day}:</p>
      <p className="text-lg text-gray-800">{workout}</p>
    </div>
  );
};

export default WorkoutCard;
