import React, { useState, useEffect } from 'react';
import TrainingDurationInput from '../components/TrainingDurationInput';
import Phase from '../components/Phase';

const TrainingPlan = ({ isDarkMode }) => {
  const [weeksAvailable, setWeeksAvailable] = useState(null);
  const [adjustedPlan, setAdjustedPlan] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  // Define workouts for each phase
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

  // Adjust plan based on user input (weeks)
  const adjustPlan = (weeks) => {
    const baseWeeks = Math.floor(weeks * 0.4);
    const buildWeeks = Math.floor(weeks * 0.3);
    const peakWeeks = Math.floor(weeks * 0.2);
    const taperWeeks = weeks - (baseWeeks + buildWeeks + peakWeeks); // Ensure total weeks add up

    const plan = {
      baseWeeks,
      buildWeeks,
      peakWeeks,
      taperWeeks,
    };

    const initialProgress = {
      base: Array(baseWeeks).fill(false), // All weeks are initially marked as incomplete
      build: Array(buildWeeks).fill(false),
      peak: Array(peakWeeks).fill(false),
      taper: Array(taperWeeks).fill(false),
    };

    setAdjustedPlan(plan);
    setProgress(initialProgress);

    // Save the training plan and initial progress to localStorage
    localStorage.setItem('trainingPlan', JSON.stringify(plan));
    localStorage.setItem('trainingProgress', JSON.stringify(initialProgress));
    localStorage.setItem('weeksAvailable', weeks); // Save weeks to localStorage

    setError(null); // Clear error if plan is valid
  };

  const handleSubmit = (weeks) => {
    if (isNaN(weeks) || weeks <= 0) {
      setError('Please enter a valid number of weeks (greater than 0).');
      return;
    }
    setWeeksAvailable(weeks);
    adjustPlan(weeks);
  };

  const handleReset = () => {
    // Reset the weeksAvailable value
    setWeeksAvailable(null);
    setAdjustedPlan(null);
    setProgress(null);
    setError(null);

    // Clear the stored plan and progress from localStorage
    localStorage.removeItem('weeksAvailable');
    localStorage.removeItem('trainingPlan');
    localStorage.removeItem('trainingProgress');
  };

  // Function to handle marking a workout as completed
  const toggleWorkoutCompletion = (phase, workoutIndex) => {
    const updatedWorkouts = { ...phaseWorkouts };
    updatedWorkouts[phase][workoutIndex].completed = !updatedWorkouts[phase][workoutIndex].completed;
    setProgress(updatedWorkouts);

    // Save updated workouts to localStorage
    localStorage.setItem('trainingProgress', JSON.stringify(updatedWorkouts));
  };

  useEffect(() => {
    // Load training plan and progress from localStorage if available
    const savedPlan = localStorage.getItem('trainingPlan');
    const savedProgress = localStorage.getItem('trainingProgress');
    const savedWeeks = localStorage.getItem('weeksAvailable'); // Load weeksAvailable from localStorage

    if (savedPlan) {
      setAdjustedPlan(JSON.parse(savedPlan));
    }
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
    if (savedWeeks) {
      setWeeksAvailable(Number(savedWeeks)); // Parse saved weeks from localStorage
    }
  }, []);

  return (
    <section className="training pt-20">
      <div className="container px-6">
        {!weeksAvailable ? (
          <TrainingDurationInput onSubmit={handleSubmit} />
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Your Custom Training Plan</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <div className="space-y-8">
              <Phase
                title="Base Phase"
                weeks={adjustedPlan.baseWeeks}
                workouts={phaseWorkouts.base}
                progress={progress.base}
                toggleWorkoutCompletion={toggleWorkoutCompletion}
                phase="base"
              />
              <Phase
                title="Build Phase"
                weeks={adjustedPlan.buildWeeks}
                workouts={phaseWorkouts.build}
                progress={progress.build}
                toggleWorkoutCompletion={toggleWorkoutCompletion}
                phase="build"
              />
              <Phase
                title="Peak Phase"
                weeks={adjustedPlan.peakWeeks}
                workouts={phaseWorkouts.peak}
                progress={progress.peak}
                toggleWorkoutCompletion={toggleWorkoutCompletion}
                phase="peak"
              />
              <Phase
                title="Taper Phase"
                weeks={adjustedPlan.taperWeeks}
                workouts={phaseWorkouts.taper}
                progress={progress.taper}
                toggleWorkoutCompletion={toggleWorkoutCompletion}
                phase="taper"
              />
            </div>

            {/* Add the Reset Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
              >
                Reset Training Plan
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainingPlan;
