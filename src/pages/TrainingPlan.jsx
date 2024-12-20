import React, { useState, useEffect } from 'react';
import Phase from '../components/Phase';
import TrainingDurationInput from '../components/TrainingDurationInput';

const TrainingPlan = ({ isDarkMode }) => {
  const [progress, setProgress] = useState(null);
  const [weeksAvailable, setWeeksAvailable] = useState(0);
  const [adjustedPlan, setAdjustedPlan] = useState(null);

  const phaseWorkouts = {
    base: [
      { name: "Easy Run: 45 min", completed: false },
      { name: "Long Run: 60 min", completed: false },
      { name: "Cross-Training: Cycling or Swimming (45 min)", completed: false },
      { name: "Easy Run: 30 min", completed: false },
      { name: "Rest Day", completed: false },
      { name: "Strength Training (30 min)", completed: false },
      { name: "Rest Day", completed: false },
    ],
    build: [
      { name: "Interval Training: 6x400m with rest", completed: false },
      { name: "Tempo Run: 40 min at race pace", completed: false },
      { name: "Strength Training (45 min)", completed: false },
      { name: "Easy Run: 45 min", completed: false },
      { name: "Rest Day", completed: false },
      { name: "Speed Work: 8x200m sprints", completed: false },
      { name: "Long Run: 90 min", completed: false },
    ],
    peak: [
      { name: "Race Pace Run: 30 min", completed: false },
      { name: "Interval Training: 4x800m with rest", completed: false },
      { name: "Strength Training (45 min)", completed: false },
      { name: "Easy Run: 30 min", completed: false },
      { name: "Rest Day", completed: false },
      { name: "Speed Work: 6x400m sprints", completed: false },
      { name: "Rest Day", completed: false },
    ],
    taper: [
      { name: "Easy Run: 30 min", completed: false },
      { name: "Rest Day", completed: false },
      { name: "Easy Run: 20 min", completed: false },
      { name: "Rest Day", completed: false },
      { name: "Cross-Training (30 min)", completed: false },
      { name: "Rest Day", completed: false },
      { name: "Race Day (or Rest Day)", completed: false },
    ],
  };

  const handleToggleCompletion = (phase, workoutToToggle) => {
    const updatedWorkouts = { ...progress }; // Ensure progress is updated instead of phaseWorkouts directly
    const updatedPhase = updatedWorkouts[phase].map((workout) =>
      workout === workoutToToggle ? { ...workout, completed: !workout.completed } : workout
    );
    updatedWorkouts[phase] = updatedPhase;
    setProgress(updatedWorkouts);

    // Save updated progress in localStorage
    localStorage.setItem('trainingProgress', JSON.stringify(updatedWorkouts));
  };

  const handleTrainingDurationSubmit = (weeks) => {
    setWeeksAvailable(weeks);
    updatePlan(weeks); // Adjust the plan based on the number of weeks
  };

  const updatePlan = (weeks) => {
    const adjusted = { ...phaseWorkouts };
    Object.keys(adjusted).forEach((phaseKey) => {
      const phase = adjusted[phaseKey];
      const totalWorkouts = phase.length;
      const adjustedWorkoutsCount = Math.floor((weeks / 12) * totalWorkouts); // Adjust based on the weeks available

      adjusted[phaseKey] = phase.slice(0, adjustedWorkoutsCount); // Slice the workouts based on weeks
    });
    setAdjustedPlan(adjusted);
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem('trainingProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  return (
    <div className="training-plan">
      <div className="container flex flex-col justify-center items-center px-6 pt-20 pb-10">

        {/* Show the Training Duration Input */}
        <TrainingDurationInput onSubmit={handleTrainingDurationSubmit} />

        {/* Render Training Plan Phases after setting the weeks */}
        {adjustedPlan && (
          <div>
            {Object.keys(adjustedPlan).map((phaseKey) => {
              const phase = adjustedPlan[phaseKey];
              return (
                <Phase
                  key={phaseKey}
                  title={phaseKey.charAt(0).toUpperCase() + phaseKey.slice(1)} // Capitalize the phase name
                  workouts={phase} // Pass the adjusted workouts
                  onToggleCompletion={(workout) => handleToggleCompletion(phaseKey, workout)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPlan;
