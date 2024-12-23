import React from "react";

function Features() {
  const features = [
    { title: "Personalized Plans", description: "Tailored plans for all levels." },
    { title: "Performance Tracking", description: "Monitor your progress in real-time." },
    { title: "Community Challenges", description: "Join and compete with others." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto text-center pb-20">
        <h2 className="text-3xl font-semibold text-blue-900 mb-12">Nobody knows Triathlete training like we do</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-6"
            >
              <img src="" alt="" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 text-white rounded-3xl w-1/2 px-8 py-2 mt-14">Get started</button>
      </div>
    </section>
  );
}

export default Features;
