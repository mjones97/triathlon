import React, { useState, useEffect } from 'react';
import Phase from '../components/Phase';
import TrainingDurationInput from '../components/TrainingDurationInput';

const TrainingPlan = ({ isDarkMode }) => {
  const [progress, setProgress] = useState(null);
  const [weeksAvailable, setWeeksAvailable] = useState(0);
  const [adjustedPlan, setAdjustedPlan] = useState(null);
  const [allocatedWeeks, setAllocatedWeeks] = useState({});
  const [isDurationInputVisible, setIsDurationInputVisible] = useState(true);

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
    const updatedWorkouts = { ...progress };
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
    setIsDurationInputVisible(false); // Hide the duration input after submission
  };

  const updatePlan = (weeks) => {
  // Define the relative phase duration in weeks
  const phaseWeekDistribution = {
    base: 0.40,
    build: 0.25,
    peak: 0.2,
    taper: 0.15,
  };

  // Allocate initial weeks based on the distribution
  const allocated = Object.keys(phaseWeekDistribution).reduce((acc, phaseKey) => {
    const allocatedWeeksForPhase = Math.floor(weeks * phaseWeekDistribution[phaseKey]);
    acc[phaseKey] = allocatedWeeksForPhase;
    return acc;
  }, {});

  // Calculate total weeks allocated so far
  const totalAllocatedWeeks = Object.values(allocated).reduce((sum, weekCount) => sum + weekCount, 0);

  // Calculate leftover weeks after initial allocation
  let leftoverWeeks = weeks - totalAllocatedWeeks;

  // Sort phases by their proportion to distribute leftover weeks
  const remainingPhases = Object.keys(phaseWeekDistribution).sort(
    (a, b) => phaseWeekDistribution[b] - phaseWeekDistribution[a]
  );

  // Distribute leftover weeks
  remainingPhases.forEach((phaseKey) => {
    if (leftoverWeeks > 0) {
      allocated[phaseKey] += 1;
      leftoverWeeks -= 1;
    }
  });

  // Update state with the allocated weeks
  setAllocatedWeeks(allocated);

  // Adjust the workouts based on the updated allocation
  adjustWorkoutsBasedOnWeeks(allocated, weeks);
};
  

  const adjustWorkoutsBasedOnWeeks = (allocatedWeeks, weeks) => {
    const adjusted = { ...phaseWorkouts };

    // Adjust the workouts based on the number of weeks allocated to each phase
    Object.keys(adjusted).forEach((phaseKey) => {
      const phase = adjusted[phaseKey];
      const phaseWeeks = allocatedWeeks[phaseKey];
      const totalWorkouts = phase.length;
      const workoutsPerWeek = Math.floor(totalWorkouts / 7); // How many workouts per week

      // Scale the workouts based on the allocated weeks
      const totalPhaseWorkouts = phaseWeeks * workoutsPerWeek;
      adjusted[phaseKey] = phase.slice(0, totalPhaseWorkouts); // Adjusted workouts
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
        <div className="py-6">
          {isDurationInputVisible && <TrainingDurationInput onSubmit={handleTrainingDurationSubmit} />}
        </div>

        <div>
          {adjustedPlan && (
            <div className="flex flex-col gap-4">
              {Object.keys(adjustedPlan).map((phaseKey) => {
                const phase = adjustedPlan[phaseKey];
                const weeksForPhase = allocatedWeeks[phaseKey];  // Get the weeks for the current phase
                return (
                  <Phase
                    key={phaseKey}
                    title={phaseKey.charAt(0).toUpperCase() + phaseKey.slice(1)} // Capitalize the phase name
                    workouts={phase} // Pass the adjusted workouts
                    weeks={weeksForPhase} // Pass the weeks allocated to the phase
                    onToggleCompletion={(workout) => handleToggleCompletion(phaseKey, workout)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingPlan;
