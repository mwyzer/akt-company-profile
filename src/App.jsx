import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="font-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}

export default App;
