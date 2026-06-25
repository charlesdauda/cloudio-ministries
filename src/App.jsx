import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MinistryPage from "./Pages/MinistryPage"
import SermonPage from "./Pages/SermonPage";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/"      element={<Home />}      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ministry" element={<MinistryPage />} />
      <Route path="/sermon" element={<SermonPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;