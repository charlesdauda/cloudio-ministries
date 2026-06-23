import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import About from "../Components/About";
import Education from "../Components/Education";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main>
      <PageHeader
        title="About"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <About />
      <Education />
    </main>
  );
};

export default AboutPage;