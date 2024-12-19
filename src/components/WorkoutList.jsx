import React, { useState } from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutList = ({ workouts, weeks }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);  // Default: no week is selected

  const generateWeeklyWorkouts = () => {
    const weeklyWorkouts = [];
    for (let i = 0; i < weeks; i++) {
      weeklyWorkouts.push(workouts);
    }
    return weeklyWorkouts;
  };

  const toggleWeek = (index) => {
    setSelectedWeek(selectedWeek === index ? null : index);  // Toggle week visibility
  };

  return (
    <div className="p-4 space-y-6">
      {generateWeeklyWorkouts().map((week, index) => (
        <div key={index} className="border-t-2 pt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-700">Week {index + 1}</h4>
            <button
              onClick={() => toggleWeek(index)}
              className="text-blue-600 hover:text-blue-800"
            >
              {selectedWeek === index ? 'Hide Workouts' : 'Show Workouts'}
            </button>
          </div>

          {selectedWeek === index && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {week.map((workout, i) => (
                <WorkoutCard key={i} workout={workout} day={i + 1} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
