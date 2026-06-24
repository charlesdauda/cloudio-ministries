import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import Ministry from "../Components/Ministry";
import Gallery from "../Components/Gallery";
import ChurchSection from "../Components/ChurchSection";

const MinistryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main>
      <PageHeader
        title="Our Ministry"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Ministry" },
        ]}
      />
      <Ministry />
      <ChurchSection />
      <Gallery />
    </main>
  );
};

export default MinistryPage;