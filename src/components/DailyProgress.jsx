import React from 'react';

const DailyProgress = ({ sports, handleDailyChange }) => {
	return (
    	<div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mb-6 max-w-full">
      		<h3 className="text-lg font-medium text-gray-800 mb-4">Daily Progress</h3>
      		{sports.map((sport, sportIndex) => (
    			<div key={sportIndex} className="w-full mb-6">
      				{/* Display Sport Name and Completed vs Goal */}
      				<div className="flex justify-between mb-2">
			            <span className="text-lg font-medium text-gray-800">{sport.name}</span>
			            <span className="text-sm text-gray-500">
			            	{sport.daily.reduce((acc, cur) => acc + cur, 0)}{' '}
			              	{sport.name === 'Swimming' ? 'yards' : 'miles'} of {sport.goal}{' '}
			              	{sport.name === 'Swimming' ? 'yards' : 'miles'}
			            </span>
			        </div>

		          	{/* Progress Bar */}
		          	<div className="w-full bg-gray-300 rounded-full h-4">
		            	<div
		              		className={`${sport.color} h-4 rounded-full`}
		              		style={{
		                		width: `${(sport.daily.reduce((acc, cur) => acc + cur, 0) / sport.goal) * 100}%`,
		                		maxWidth: '100%'
		              		}}
		            	></div>
		          	</div>

      				{/* Daily Input Section */}
      				<div className="grid grid-cols-7 gap-2 mt-4">
        				{sport.daily.map((day, dayIndex) => (
			            	<div 
				              	key={dayIndex} 
				              	className="flex flex-col items-center">
				            </div>
        				))}
      				</div>
    			</div>
  			))}
    	</div>
  	);
};

export default DailyProgress;
