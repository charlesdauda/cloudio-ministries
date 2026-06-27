import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import Contact from "../Components/Contact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main>
      <PageHeader
        title="Contact"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
        <Contact />
    </main>
  );
};

export default ContactPage;