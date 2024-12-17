import React, { useState } from 'react';

const ProgressTracker = () => {
  const [sports, setSports] = useState([
    { name: 'Swimming', daily: [500, 600, 450, 500, 550, 400, 550], goal: 3500, color: 'bg-blue-500' },
    { name: 'Cycling', daily: [10, 15, 20, 10, 12, 18, 25], goal: 100, color: 'bg-green-500' },
    { name: 'Running', daily: [5, 6, 4, 5, 7, 8, 6], goal: 30, color: 'bg-orange-500' },
  ]);

  // Function to calculate total completed
  const calculateTotalCompleted = (daily) => daily.reduce((acc, cur) => acc + cur, 0);

  // Function to calculate progress as a percentage
  const calculateProgress = (completed, goal) => (completed / goal) * 100;

  // Handle daily progress input change
  const handleDailyChange = (sportIndex, dayIndex, value) => {
    const updatedSports = [...sports];
    updatedSports[sportIndex].daily[dayIndex] = value;
    setSports(updatedSports);
  };

  return (
    <div className="space-y-4 p-6">
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

            {/* Daily Input Section */}
            <div className="grid grid-cols-7 gap-2 mt-4">
              {sport.daily.map((day, dayIndex) => (
                <div key={dayIndex} className="flex flex-col items-center"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
