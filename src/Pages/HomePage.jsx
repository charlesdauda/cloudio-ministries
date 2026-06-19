import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Ministry from "../Components/Ministry"
import Testimonials from "../Components/Testimonials";
import SpotifyCTA from "../Components/Spotifycta";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ministry />
      <Testimonials />
      <SpotifyCTA />
    </>
  );
};

export default Home;