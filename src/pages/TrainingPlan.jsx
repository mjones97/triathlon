import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import trainingPlan from '../data/trainingPlan';
import EventDetails from '../components/EventDetails';

const TrainingPlan = ({ isDarkMode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [progress, setProgress] = useState(
    trainingPlan.reduce((acc, curr, index) => {
      const day = moment().add(index, 'days').format('YYYY-MM-DD');
      acc[day] = {
        warmup: false,
        mainWorkout: {
          swim: curr.mainWorkout.swim ? Array(curr.mainWorkout.swim.length).fill(false) : [],
          strength: curr.mainWorkout.strength ? Array(curr.mainWorkout.strength.length).fill(false) : [],
          bike: curr.mainWorkout.bike ? Array(curr.mainWorkout.bike.length).fill(false) : [],
          core: curr.mainWorkout.core ? Array(curr.mainWorkout.core.length).fill(false) : [],
        },
        cooldown: false,
      };
      return acc;
    }, {})
  );
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const today = moment().format('YYYY-MM-DD');
    const currentEvent = trainingPlan.find((event, index) => 
      moment().add(index, 'days').format('YYYY-MM-DD') === today
    );
    setEventDetails(currentEvent);
    setSelectedDate(new Date());
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const event = trainingPlan.find((event, index) => moment().add(index, 'days').format('YYYY-MM-DD') === formattedDate);
    setEventDetails(event);
  };

  const handleCheckboxChange = (day, category, index) => {
    setProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      if (category === 'warmup' || category === 'cooldown') {
        newProgress[day][category] = !newProgress[day][category];
      } else {
        newProgress[day].mainWorkout[category][index] = !newProgress[day].mainWorkout[category][index];
      }
      return newProgress;
    });
  };

  const calculateProgress = (day) => {
    const dayProgress = progress[day];
    const totalItems = Object.values(dayProgress.mainWorkout).flat().length + (dayProgress.warmup ? 1 : 0) + (dayProgress.cooldown ? 1 : 0);
    const completedItems = Object.values(dayProgress.mainWorkout)
      .flat()
      .filter(item => item).length + (dayProgress.warmup ? 1 : 0) + (dayProgress.cooldown ? 1 : 0);

    return totalItems ? (completedItems / totalItems) * 100 : 0;
  };

  return (
    <div className={`container pt-14 pb-4 px-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <h2 className="text-2xl font-semibold mb-6">Training Plan</h2>
      <div className="flex justify-center mb-6">
        <Calendar className="rounded-lg" onChange={handleDateClick} value={selectedDate} />
      </div>

      {eventDetails && (
        <div>
          <EventDetails
            eventDetails={eventDetails}
            selectedDate={selectedDate}
            progress={progress}
            handleCheckboxChange={handleCheckboxChange}
          />
          <div className="pb-10">
            <h3 className="text-lg font-semibold mb-2">Progress</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    {calculateProgress(moment(selectedDate).format('YYYY-MM-DD')).toFixed(0)}% Completed
                  </span>
                </div>
              </div>
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-teal-600 h-2.5 rounded-full"
                      style={{
                        width: `${calculateProgress(moment(selectedDate).format('YYYY-MM-DD')).toFixed(0)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingPlan;
