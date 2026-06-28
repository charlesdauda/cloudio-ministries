import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MinistryPage from "./Pages/MinistryPage";
import SermonPage from "./Pages/SermonPage";
import ContactPage from "./Pages/ContactPage";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Loader onDone={handleDone} />}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />}        />
          <Route path="/about"    element={<AboutPage />}   />
          <Route path="/ministry" element={<MinistryPage />}/>
          <Route path="/sermon"   element={<SermonPage />}  />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;