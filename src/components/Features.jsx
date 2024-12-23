import React from "react";
import Button from './Button';

function Features() {
  const features = [
    {
      title: "Tailored Swim Training",
      description: "Improve your stroke efficiency and build endurance with customized swim workouts, video tutorials, and progress tracking tools.",
    },
    {
      title: "Powerful Cycling Workouts",
      description: "Enhance your cycling strength and speed with data-driven training plans, interval sessions, and seamless integration with smart devices.",
    },
    {
      title: "Optimized Run Coaching",
      description: "Achieve your personal best with guided runs, personalized pace targets, and real-time feedback to improve form and efficiency.",
    },
  ];

  return (
    <section id="features">
      <div className="max-w-[1216px] mx-auto text-center py-20 px-4">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">
          Everything You Need for Triathlon Success
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-6 w-full sm:w-[18rem] lg:w-[22rem]"
            >
              <img 
                src={`https://via.placeholder.com/64?text=${feature.title.split(' ')[0]}`} 
                alt={feature.title} 
                className="mb-4 w-12 h-12"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
              <Button>Start Trial</Button>
          </div>
      </div>
    </section>
  );
}

export default Features;
