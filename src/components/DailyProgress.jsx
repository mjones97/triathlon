import React, { useState, useEffect } from 'react';

const DailyProgress = ({ completedWorkouts }) => {
  const [sports, setSports] = useState([
    {
      name: 'Swimming',
      goal: 3500, // Total yards
      color: 'bg-blue-500', // Blue color for swimming
      daily: [500, 600, 450, 500, 550, 400, 550], // Daily progress (yards)
    },
    {
      name: 'Cycling',
      goal: 100, // Total miles
      color: 'bg-green-500', // Green color for cycling
      daily: [10, 15, 20, 10, 12, 18, 25], // Daily progress (miles)
    },
    {
      name: 'Running',
      goal: 30, // Total miles
      color: 'bg-orange-500', // Orange color for running
      daily: [5, 6, 4, 5, 7, 8, 6], // Daily progress (miles)
    },
  ]);

  // Effect to update the daily progress based on the completed workouts
  useEffect(() => {
    const updatedSports = [...sports];
    completedWorkouts.forEach(workout => {
      const sportIndex = updatedSports.findIndex(sport => sport.name === workout.sport);
      if (sportIndex !== -1) {
        updatedSports[sportIndex].daily[workout.dayIndex] += workout.progress;
      }
    });
    setSports(updatedSports);
  }, [completedWorkouts]); // Runs when completedWorkouts change

  // Function to calculate total completed
  const calculateTotalCompleted = (daily) => daily.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="space-y-4 pb-4">
      {/* Daily Progress Section */}
      <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mb-6 max-w-full">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Daily Progress</h3>
        {sports.map((sport, sportIndex) => (
          <div key={sportIndex} className="w-full mb-6">
            {/* Display Sport Name and Completed vs Goal */}
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium text-gray-800">{sport.name}</span>
              <span className="text-sm text-gray-500">
                {sport.daily.reduce((acc, cur) => acc + cur, 0)}{' '}
                {sport.name === 'Swimming' ? 'yards' : 'miles'} of {sport.goal}{' '}
                {sport.name === 'Swimming' ? 'yards' : 'miles'}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className={`${sport.color} h-4 rounded-full`}
                style={{
                  width: `${(sport.daily.reduce((acc, cur) => acc + cur, 0) / sport.goal) * 100}%`,
                  maxWidth: '100%',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyProgress;
