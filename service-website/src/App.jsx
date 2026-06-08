import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer className="footer">
        <p>&copy; 2026 ServicePro. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;