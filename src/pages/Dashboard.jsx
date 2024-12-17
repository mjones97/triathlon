import React from 'react'
import GreetingBox from '../components/GreetingBox'
import Progress from '../components/Progress'

const Dashboard = () => {
	return (
		<section className="dashboard bg-gray-200">
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