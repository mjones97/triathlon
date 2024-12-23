import React from 'react';
import Button from './Button'

const Mission = () => {
  return (
    <section className="mission bg-gray-100 ">
      <div className="container flex flex-col max-w-[1216px] mx-auto px-6 py-20 space-y-12 md:flex-row md:justify-center md:gap-x-[120px] md:space-y-0">
        {/* Image Section */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            className="rounded-md w-full h-auto"
            src="https://images.ctfassets.net/0k812o62ndtw/10CCuR4H61I1Ig5Ft3mkDU/8ae41d8fd9438e42407666b26656759b/Community_member_workout.jpg?w=1200&q=85&fm=webp"
            alt="Community Member Workout"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 space-y-6 md:space-y-4">
          <h3 className="text-2xl font-bold">Mission Heading</h3>
          <div className="flex flex-col gap-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis mi nec ex dapibus tristique.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis mi nec ex dapibus tristique. Suspendisse tempor in ipsum id tincidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis mi nec ex dapibus tristique.
            </p>

            <div className="text-center md:text-left">
          		<Button>Start Trial</Button>
        	</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
