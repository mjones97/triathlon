import React from 'react';

const TrainingProgress = ({ currentPhase, progressPercentage, trainingProgress }) => {
  // Ensure trainingProgress[currentPhase] exists before calling .reduce()
  const phaseWorkouts = trainingProgress && trainingProgress[currentPhase] ? trainingProgress[currentPhase] : [];

  // Calculate completed workouts only if the workouts array is available
  const completedWorkouts = phaseWorkouts.length > 0 ? phaseWorkouts.reduce((acc, workout) => workout.completed ? acc + 1 : acc, 0) : 0;

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Training Progress for {currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)}</h3>
      
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium text-gray-800">Completed Workouts</span>
        <span className="text-sm text-gray-500">{completedWorkouts} of {phaseWorkouts.length}</span>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{
            width: `${progressPercentage}%`,
            maxWidth: '100%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default TrainingProgress;
