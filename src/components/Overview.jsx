import React from "react";
import Button from './Button';

function Overview() {
  return (
    <section id="app-mockup" className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 px-4">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Details Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Your Ultimate Triathlon Training Companion
          </h2>
          <p className="text-gray-700 text-lg">
            Whether you're a beginner or an experienced triathlete, our app provides everything you need to optimize your training and achieve your goals.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base">
            <li>Custom training plans tailored to your goals.</li>
            <li>Seamless integration with smart devices.</li>
            <li>Real-time performance tracking and feedback.</li>
            <li>Access to a supportive global community.</li>
          </ul>
          <div className="text-center md:text-left">
              <Button>Start Trial</Button>
          </div>
        </div>

        {/* Mockup Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img 
            src="https://via.placeholder.com/400x600?text=App+Mockup" 
            alt="App Mockup" 
            className="rounded-lg shadow-lg w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Overview;
