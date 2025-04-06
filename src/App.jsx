import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudies";
import IndustrySolution from "./components/IndustrySolution";

function App() {
  return (
    <div className="font-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <IndustrySolution />
      <CaseStudies />
    </div>
  );
}

export default App;
