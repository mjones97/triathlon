import React from 'react';
import moment from 'moment';

const EventDetails = ({ eventDetails, selectedDate, progress, handleCheckboxChange }) => {
  const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
  const eventProgress = progress[formattedDate];

  return (
    <div className="mt-4 mb-10 p-6 bg-white text-black rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{eventDetails.title}</h3>

      {/* Warm-up */}
      <div className="mt-4">
        <h4 className="font-semibold">Warm-up:</h4>
        {eventDetails.warmup.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <input
              type="checkbox"
              checked={eventProgress.warmup[idx]} // Ensure you're checking the correct index
              onChange={() => handleCheckboxChange(formattedDate, 'warmup', idx)} // Pass index to handle change
              className="mr-2"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Main Workout */}
      <div className="mt-4">
        <h4 className="font-semibold">Main Workout:</h4>

        {/* Swim */}
        {eventDetails.mainWorkout.swim && eventDetails.mainWorkout.swim.length > 0 && (
          <div className="mt-2">
            <h5 className="font-semibold">Swim:</h5>
            {eventDetails.mainWorkout.swim.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventProgress.mainWorkout.swim[idx]} // Ensure correct state reference
                  onChange={() => handleCheckboxChange(formattedDate, 'swim', idx)} // Pass index to handle change
                  className="mr-2"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Strength */}
        {eventDetails.mainWorkout.strength && eventDetails.mainWorkout.strength.length > 0 && (
          <div className="mt-2">
            <h5 className="font-semibold">Strength:</h5>
            {eventDetails.mainWorkout.strength.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventProgress.mainWorkout.strength[idx]} // Ensure correct state reference
                  onChange={() => handleCheckboxChange(formattedDate, 'strength', idx)} // Pass index to handle change
                  className="mr-2"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bike */}
        {eventDetails.mainWorkout.bike && eventDetails.mainWorkout.bike.length > 0 && (
          <div className="mt-2">
            <h5 className="font-semibold">Bike:</h5>
            {eventDetails.mainWorkout.bike.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventProgress.mainWorkout.bike[idx]} // Ensure correct state reference
                  onChange={() => handleCheckboxChange(formattedDate, 'bike', idx)} // Pass index to handle change
                  className="mr-2"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Core */}
        {eventDetails.mainWorkout.core && eventDetails.mainWorkout.core.length > 0 && (
          <div className="mt-2">
            <h5 className="font-semibold">Core:</h5>
            {eventDetails.mainWorkout.core.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventProgress.mainWorkout.core[idx]} // Ensure correct state reference
                  onChange={() => handleCheckboxChange(formattedDate, 'core', idx)} // Pass index to handle change
                  className="mr-2"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Cooldown */}
        <div className="mt-4">
          <h4 className="font-semibold">Cooldown:</h4>
          {eventDetails.cooldown.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="checkbox"
                checked={eventProgress.cooldown[idx]} // Ensure you're checking the correct index
                onChange={() => handleCheckboxChange(formattedDate, 'cooldown', idx)} // Pass index to handle change
                className="mr-2"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-4">
          <h4 className="font-semibold">Notes:</h4>
          <p>{eventDetails.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
