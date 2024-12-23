import React from "react";

function Hero() {
  return (
    <section className="relative top-20 z-10 bg-gradient-to-r from-blue-900 to-blue-700 h-screen text-white text-center md:text-left">
      <div className="container mx-auto flex flex-col justify-center items-center text-center py-20 px-6">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Your Ultimate Triathlon Training App</h1>
          <p className="text-lg mb-6">
            Transform your training with personalized plans, performance tracking, and community support.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-orange-400 px-6 py-3 rounded-lg text-white hover:bg-orange-500">
              Download on App Store
            </button>
            <button className="bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-gray-900">
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
