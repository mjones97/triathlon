import React, { useState, useEffect } from 'react'
import { FaHome, FaListAlt, FaChartLine, FaCog } from 'react-icons/fa';

const Navigation = () => {
	return (
		<div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
      		<div className="flex justify-around items-center py-2">
        		<div className="text-xl">
          			<FaHome />
          			<span className="text-sm block">Home</span>
        		</div>

		        <div className="text-xl">
		          <FaListAlt />
		        	<span className="text-sm block">Log</span>
		        </div>

		        <div className="text-xl">
		          <FaChartLine />
		        	<span className="text-sm block">Progress</span>
		        </div>

		        <div className="text-xl">
		        	<FaCog />
		          <span className="text-sm block">Settings</span>
		        </div>
      		</div>
    	</div>
	)
}

export default Navigation