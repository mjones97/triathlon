import React from 'react';

const WeeklyGoalTracker = ({ sports }) => {
  const getProgressPercentage = (sport) => {
    // Calculate total completed distance, time, or whatever metric you're using
    const totalCompleted = sport.daily.reduce((acc, cur) => acc + cur, 0);

    // Handle edge case where goal is 0 to avoid division by zero
    if (sport.goal === 0) {
      return 0;
    }

    return (totalCompleted / sport.goal) * 100;
  };

  return (
    <div className="space-y-4 px-6 pb-16">
      <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mb-6 max-w-full">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Weekly Goal Progress</h3>
        {sports.map((sport, index) => {
          const progressPercentage = getProgressPercentage(sport);
          return (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">{sport.name}</span>
                <span className="text-sm text-gray-500">{progressPercentage.toFixed(1)}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                <div
                  className={`${sport.color} h-4 rounded-full`}
                  style={{
                    width: `${Math.min(progressPercentage, 100)}%`, // Prevent overflow
                    maxWidth: '100%',
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyGoalTracker;
