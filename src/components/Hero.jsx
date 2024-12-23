import React from "react";

function Hero() {
  return (
    <section className="relative z-10 bg-gradient-to-r from-blue-900 to-blue-700 h-screen text-white text-center flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The #1 Training App for Triathletes
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Transform your training with personalized plans, tracking, and support.
          </p>
          <button className="bg-orange-400 px-6 py-3 rounded-lg text-white hover:bg-orange-500">
            Start your free trial today
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
