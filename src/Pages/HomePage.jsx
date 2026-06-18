import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Ministry from "../Components/Ministry"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ministry />
    </>
  );
};

export default Home;