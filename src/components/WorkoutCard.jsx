import React from 'react';

const WorkoutCard = ({ workout, day, onToggleCompletion }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow hover:bg-blue-50 transition duration-300">
      <p className="text-sm font-medium text-gray-700">Day {day}:</p>
      <p className={`text-lg ${workout.completed ? 'text-green-600' : 'text-gray-800'}`}>
        {workout.name}
      </p>
      <button
        onClick={() => onToggleCompletion(workout)}
        className={`mt-2 ${workout.completed ? 'bg-green-500' : 'bg-blue-500'} text-white px-4 py-2 rounded-full`}
      >
        {workout.completed ? 'Completed' : 'Mark as Completed'}
      </button>
    </div>
  );
};

export default WorkoutCard;
