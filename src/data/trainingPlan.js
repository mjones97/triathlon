const trainingPlan = [
  {
    day: "Day 1",
    title: "Swim + Strength",
    warmup: ["200m warm-up"],
    mainWorkout: {
      swim: [
        "4x50m drills (e.g., fingertip drag, catch-up, side kick)",
        "6x100m at moderate pace, 30 seconds rest",
      ],
      strength: [
        "Push-ups: 3 sets of 12–15 reps",
        "Pull-ups: 3 sets of 8–10 reps",
        "Dumbbell squats: 3 sets of 10–12 reps",
        "Plank: 3 sets, hold for 45–60 seconds",
      ],
    },
    cooldown: ["100m cooldown (easy pace)"],
    notes: "Focus on breathing during swim drills.",
  },
  {
    day: "Day 2",
    title: "Bike + Core",
    warmup: ["10 min warm-up on bike"],
    mainWorkout: {
      bike: [
        "4x5 min at race pace (high effort), 2 min recovery between intervals",
        "10 min steady pace, focusing on cadence",
      ],
      core: [
        "Leg raises: 3 sets of 15 reps",
        "Russian twists: 3 sets of 20 reps",
        "Side plank: 3 sets of 30 seconds each side",
      ],
    },
    cooldown: ["15 min cooldown (easy pace on bike)"],
    notes: "Use hills for additional intensity if possible.",
  },
  {
    day: "Day 3",
    title: "Run + Strength",
    warmup: ["5 min light jog"],
    mainWorkout: {
      run: [
        "3x800m intervals at fast pace with 400m recovery jog between",
        "20 min steady pace run (moderate effort)",
      ],
      strength: [
        "Bodyweight squats: 3 sets of 15 reps",
        "Lunges: 3 sets of 12 reps per leg",
        "Push-ups: 3 sets of 12–15 reps",
      ],
    },
    cooldown: ["5 min easy jog + stretching"],
    notes: "Work on running form and breathing control.",
  },
  {
    day: "Day 4",
    title: "Brick Workout (Bike + Run)",
    warmup: ["10 min warm-up on bike"],
    mainWorkout: {
      bike: [
        "20 min at race pace",
        "5x1 minute sprints with 2 minutes recovery in between",
      ],
      run: [
        "10 min at moderate pace immediately after bike",
        "10x100m strides with 30 seconds rest",
      ],
    },
    cooldown: ["10 min easy run and stretching"],
    notes: "Brick workouts improve the transition between bike and run in a race.",
  },
  {
    day: "Day 5",
    title: "Long Swim + Core",
    warmup: ["200m easy swim"],
    mainWorkout: {
      swim: [
        "5x200m at a steady pace, 30 seconds rest between sets",
        "4x50m sprints at high intensity, 60 seconds rest between sets",
      ],
      core: [
        "Plank with leg lifts: 3 sets of 30 seconds",
        "Bicycle crunches: 3 sets of 20 reps",
        "Superman hold: 3 sets of 30 seconds",
      ],
    },
    cooldown: ["100m easy swim + stretching"],
    notes: "Focus on building endurance and technique.",
  },
  {
    day: "Day 6",
    title: "Long Bike + Run",
    warmup: ["15 min easy pace on bike"],
    mainWorkout: {
      bike: [
        "90 min steady pace bike ride",
        "Focus on maintaining a consistent cadence and effort",
      ],
      run: [
        "30 min easy run, focus on maintaining steady pace and form",
      ],
    },
    cooldown: ["10 min light jogging + stretching"],
    notes: "Endurance building day with a focus on distance.",
  },
];

export default trainingPlan;
