import React, { useState } from 'react';

const WorkoutList = ({ workouts, weeks, onToggleCompletion }) => {
  // Split workouts into weekly groups
  const workoutsPerWeek = Math.ceil(workouts.length / weeks);
  const weeklyWorkouts = Array.from({ length: weeks }, (_, weekIndex) =>
    workouts.slice(weekIndex * workoutsPerWeek, (weekIndex + 1) * workoutsPerWeek)
  );

  const [expandedWeek, setExpandedWeek] = useState(0); // Default: first week expanded

  const toggleWeek = (weekIndex) => {
    setExpandedWeek((prev) => (prev === weekIndex ? null : weekIndex));
  };

  return (
    <div className="p-4">
      {weeklyWorkouts.map((week, weekIndex) => (
        <div key={weekIndex} className="mb-6">
          <div
            className="flex justify-between items-center py-2 px-4 bg-blue-200 cursor-pointer rounded hover:bg-blue-300"
            onClick={() => toggleWeek(weekIndex)}
            aria-expanded={expandedWeek === weekIndex}
          >
            <h4 className="text-lg font-semibold text-gray-700">Week {weekIndex + 1}</h4>
            <span>{expandedWeek === weekIndex ? '▲' : '▼'}</span>
          </div>
          {expandedWeek === weekIndex && (
            <ul className="space-y-2 mt-2">
              {week.map((workout, dayIndex) => (
                <li
                  key={dayIndex}
                  className={`flex justify-between items-center py-2 px-4 rounded ${
                    workout.completed ? 'bg-green-100' : 'bg-red-100'
                  }`}
                >
                  <span className="text-gray-700">Day {dayIndex + 1}: {workout.name}</span>
                  <button
                    className={`py-1 px-4 rounded ${
                      workout.completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}
                    onClick={() => onToggleCompletion(workout)}
                  >
                    {workout.completed ? 'Completed' : 'Mark as Done'}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
