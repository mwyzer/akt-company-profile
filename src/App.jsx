import { useState } from "react";
import "./App.css";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Sections
import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";
import IndustrySolution from "./components/IndustrySolution";
import CaseStudies from "./components/CaseStudies";
// import Contact from "./components/Contact";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSectionChange = (sectionId) => {
    if (sectionId === "services") {
      setRefreshKey((prev) => prev + 1); // force remount Services
    }
  };

  return (
    <main className="font-primary overflow-hidden">
      <Navbar onSectionChange={handleSectionChange} />
      <Hero />
      <Services key={refreshKey} />
      <CTA />
      <IndustrySolution />
      <CaseStudies />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}

export default App;
