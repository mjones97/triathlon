import React, { useState } from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutList = ({ workouts, weeks }) => {
  const [weeklyWorkouts, setWeeklyWorkouts] = useState(workouts); // Track workouts state with completed flag

  // Toggle workout completion
  const handleToggleCompletion = (workoutToToggle) => {
    const updatedWorkouts = weeklyWorkouts.map((workout) =>
      workout === workoutToToggle ? { ...workout, completed: !workout.completed } : workout
    );
    setWeeklyWorkouts(updatedWorkouts);
  };

  const generateWeeklyWorkouts = () => {
    const weeklyWorkouts = [];
    for (let i = 0; i < weeks; i++) {
      weeklyWorkouts.push(workouts);
    }
    return weeklyWorkouts;
  };

  return (
    <div className="p-4 space-y-6">
      {generateWeeklyWorkouts().map((week, index) => (
        <div key={index} className="border-t-2 pt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-700">Week {index + 1}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {week.map((workout, i) => (
              <WorkoutCard
                key={i}
                workout={workout}
                day={i + 1}
                onToggleCompletion={handleToggleCompletion}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
