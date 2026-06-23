import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MinistryPage from "./Pages/MinistryPage"

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/"      element={<Home />}      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ministry" element={<MinistryPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;