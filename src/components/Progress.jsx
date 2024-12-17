import React, { useState } from 'react';
import WeeklyProgress from './WeeklyProgress';
import DailyProgress from './DailyProgress';

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
      {/* Flex container to display both Daily and Weekly Progress side by side */}
      <div className="flex flex-wrap justify-between gap-4">
        {/* Daily Progress Section */}
        <DailyProgress
          sports={sports}
          calculateTotalCompleted={calculateTotalCompleted}
          calculateProgress={calculateProgress}
          handleDailyChange={handleDailyChange}
        />

        {/* Weekly Progress Section */}
        <WeeklyProgress
          sports={sports}
          calculateTotalCompleted={calculateTotalCompleted}
          calculateProgress={calculateProgress}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
