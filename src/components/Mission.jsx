import React from 'react'

const Mission = () => {
	return (
		<section className="mission">
			<div className="container flex flex-col py-20 px-6 space-y-8 lg:flex-row lg:justify-center">
				<div className="flex justify-center items-center">
					<img className="rounded-md" src="" alt="" />
				</div>

				<div className="space-y-6">
					<h3>Mission Heading</h3>
					<div className="flex flex-col gap-6">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis 
							mi nec ex dapibus tristique. Cras id quam mattis, tincidunt felis luctus, 
							convallis ligula. Pellentesque ac efficitur massa, sed dapibus enim. 
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis 
							mi nec ex dapibus tristique. Cras id quam mattis, tincidunt felis luctus, 
							convallis ligula. Pellentesque ac efficitur massa, sed dapibus enim. 
							Suspendisse tempor in ipsum id tincidunt.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis 
							mi nec ex dapibus tristique. Cras id quam mattis, tincidunt felis luctus, 
							convallis ligula.
						</p>

						<button className="bg-blue-500 text-white rounded-3xl w-1/2 px-8 py-2 mt-4">Get started</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Mission