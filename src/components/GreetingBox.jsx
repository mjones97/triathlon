import React from 'react'

const GreetingBox = () => {
	return (
		<div
		    className="relative bg-cover bg-center flex justify-center items-center text-center text-white mx-4 w-full h-5/6 rounded-lg"
		    style={{
		    	backgroundImage: "url('https://bettertriathlete.com/wp-content/uploads/2023/07/triathlon-swim-workouts.jpg')",
		    }}
		>
		    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg z-10"></div>
		    <div className="relative z-20">
		    	<h2 className="text-xl font-semibold">Hi, User!</h2>
	      		<p className="mt-2">Additional description or information can go here.</p>
		    </div>
	    </div>
	)
}

export default GreetingBox