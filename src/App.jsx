import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import AboutUs from "./assets/About";
import Maps from "./assets/Maps";
import Footer from "./assets/Footer";
import Contact from "./assets/Contact";


function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />

      <section id="home" className="pt-20">
        <Home />
      </section>

      <section id="about" className="pt-20">
        <AboutUs />
      </section>

      <section id="maps" className="pt-20">
        <Maps />
      </section>

      <section id="contact" className="pt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
