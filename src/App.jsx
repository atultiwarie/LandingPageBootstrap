import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Navbar"; // Your custom Navbar component
import Home from "./assets/Home";
import AboutUs from "./assets/About";
import Maps from "./assets/Maps";
import Footer from "./assets/Footer"; // Footer component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
