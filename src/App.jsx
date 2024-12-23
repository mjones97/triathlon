import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission"
import Features from "./components/Features";
import Slider from "./components/Slider"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="">
      <Navbar />   
      <Hero />
      <Mission />
      <Features />
      <Slider />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
