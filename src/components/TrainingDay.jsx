import React from "react";

const TrainingDay = ({ day, title, warmup, mainWorkout, cooldown, notes }) => {
  return (
    <div className="p-4 border rounded-md shadow-lg mb-4 bg-gray-100">
      <h3 className="text-xl font-bold mb-2">{day}: {title}</h3>
      <div className="mb-4">
        <h4 className="font-semibold">Warm-Up:</h4>
        <ul>
          {warmup.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">Main Workout:</h4>
        {Object.entries(mainWorkout).map(([key, value], index) => (
          <div key={index}>
            <p className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
            <ul>
              {value.map((item, idx) => (
                <li key={idx}>- {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">Cooldown:</h4>
        <ul>
          {cooldown.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </div>
      <p className="italic">Notes: {notes}</p>
    </div>
  );
};

export default TrainingDay;
