import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission"
import Overview from "./components/Overview"
import Features from "./components/Features";
import Slider from "./components/Slider"
import CTA1 from "./components/CTA1"
import CTA2 from "./components/CTA2"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="">
      <Navbar />   
      <Hero />
      <Mission />
      <Overview />
      <CTA1 />
      <Features />
      <Slider />
      <CTA2 />
      <Footer />
    </div>
  );
}

export default App;
