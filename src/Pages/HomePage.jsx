import { useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Ministry from "../Components/Ministry";
import Testimonials from "../Components/Testimonials";
import SpotifyCTA from "../Components/Spotifycta";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <SpotifyCTA />
      <Ministry />
      <Testimonials />
    </>
  );
};

export default Home;