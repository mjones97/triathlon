import React, { useState, useEffect } from 'react';
import GreetingBox from '../components/GreetingBox';
import DailyProgress from '../components/DailyProgress';
import TrainingProgress from '../components/TrainingProgress';

const Dashboard = ({ isDarkMode, sports }) => {
  const [trainingPlan, setTrainingPlan] = useState(null);
  const [trainingProgress, setTrainingProgress] = useState(null);
  const [currentPhase, setCurrentPhase] = useState('base');

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
    return trainingProgress[phase].filter((workout) => workout.completed).length;
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

  const progressPercentage = calculateProgressPercentage(currentPhase);

  // Function to handle workout completion (updating localStorage)
  const handleWorkoutCompletion = (sport, dayIndex, progress) => {
    const updatedProgress = { ...trainingProgress };
    const workoutIndex = updatedProgress[currentPhase].findIndex(
      (workout, index) => index === dayIndex
    );
    
    if (workoutIndex !== -1) {
      updatedProgress[currentPhase][workoutIndex].completed = true;
      updatedProgress[currentPhase][workoutIndex].progress = progress;
      
      setTrainingProgress(updatedProgress);
      localStorage.setItem('trainingProgress', JSON.stringify(updatedProgress));
    }
  };

  return (
    <section className="dashboard">
      <div className="container flex flex-col justify-center items-center px-6 py-16">
        <div className="py-4 w-full">
          <GreetingBox />
        </div>

        <div className="py-4 w-full">
          {trainingProgress && (
            <TrainingProgress
              currentPhase={currentPhase}
              progressPercentage={progressPercentage}
            />
          )}
        </div>

        <div className="py-4 w-full">
          <div className="daily">
            <DailyProgress
              sports={sports}
              completedWorkouts={trainingProgress ? trainingProgress[currentPhase] : []}
              onComplete={handleWorkoutCompletion}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
