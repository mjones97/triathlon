import React, { useState } from 'react';

const TrainingDurationInput = ({ onSubmit }) => {
  const [weeks, setWeeks] = useState(12); // Default to 12 weeks

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(weeks); // Pass the number of weeks to the parent component
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Enter Training Duration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="weeks" className="block text-sm font-medium text-gray-700">
            How many weeks do you have for training?
          </label>
          <input
            type="number"
            id="weeks"
            value={weeks}
            onChange={(e) => setWeeks(e.target.value)}
            min="4"
            max="52"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TrainingDurationInput;
