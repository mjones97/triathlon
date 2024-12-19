import React, { useState, useEffect } from 'react';
import GreetingBox from '../components/GreetingBox';
import Progress from '../components/Progress';
import WeeklyGoalTracker from '../components/WeeklyGoalTracker';

const Dashboard = ({ isDarkMode, sports }) => {
  const [trainingPlan, setTrainingPlan] = useState(null);
  const [trainingProgress, setTrainingProgress] = useState(null);
  const [currentPhase, setCurrentPhase] = useState('base'); // Current phase starts as 'base'

  useEffect(() => {
    const savedPlan = localStorage.getItem('trainingPlan');
    const savedProgress = localStorage.getItem('trainingProgress');
    if (savedPlan) {
      setTrainingPlan(JSON.parse(savedPlan));
    }
    if (savedProgress) {
      setTrainingProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Function to get completed workouts for the current phase
  const getCompletedWorkouts = (phase) => {
    if (!trainingProgress || !trainingProgress[phase]) return 0;
    return trainingProgress[phase].filter(workout => workout.completed).length;
  };

  // Function to get total workouts for the current phase
  const getTotalWorkouts = (phase) => {
    if (!trainingProgress || !trainingProgress[phase]) return 0;
    return trainingProgress[phase].length;
  };

  // Function to calculate the progress percentage for the current phase
  const calculateProgressPercentage = (phase) => {
    const completed = getCompletedWorkouts(phase);
    const total = getTotalWorkouts(phase);
    if (total === 0) return 0; // Avoid division by zero
    return (completed / total) * 100;
  };

  const progressPercentage = calculateProgressPercentage(currentPhase); // Calculate progress percentage for current phase

  return (
    <section className="dashboard pt-14">
      <div className="container px-6">
        <div className="flex justify-center items-center h-64">
          <GreetingBox />
        </div>

        {trainingProgress && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your {currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)} Phase Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-700">{currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)} Phase</p>
                <p className="text-lg text-gray-500">{progressPercentage.toFixed(1)}% workouts completed</p>
              </div>
              {/* Progress bar */}
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
          </div>
        )}

        <div className="progress">
          <div className="daily">
            <Progress sports={sports} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
