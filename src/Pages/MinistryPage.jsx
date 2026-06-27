import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import Ministry from "../Components/Ministry";
import ChurchSection from "../Components/ChurchSection";

const MinistryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main>
      <PageHeader
        title="Ministry"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Ministry" },
        ]}
      />
      <Ministry />
      <ChurchSection />
    </main>
  );
};

export default MinistryPage;