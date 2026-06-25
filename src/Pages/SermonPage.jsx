import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import Sermons from "../Components/Sermon";

const SermonPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main>
      <PageHeader
        title="Sermons & Messages"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sermons" },
        ]}
      />
      <Sermons />
    </main>
  );
};

export default SermonPage;