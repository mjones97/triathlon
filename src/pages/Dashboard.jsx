import React from 'react'
import GreetingBox from '../components/GreetingBox'
import Progress from '../components/Progress'

const Dashboard = ({ isDarkMode }) => {
	return (
		<section className={`dashboard pt-12 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
			<div className="container">
				<div className="flex justify-center items-center h-64">
					<GreetingBox />
				</div>
				<div className="weekly progress">
					<Progress />
				</div>
			</div>
		</section>
	)
}

export default Dashboard
