// src/App.jsx
// ─────────────────────────────────────────────────────────────
//  SEO CHANGE: Added usePageSEO hook so title + meta
//  description update dynamically as user scrolls sections.
//  activeSection state is passed from Navbar via prop.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import WhatWeBuild from "./components/sections/WhatWeBuild";
import OurWork from "./components/sections/OurWork";
import ClientReviews from "./components/sections/ClientReviews";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import { usePageSEO } from "./hooks/usePageSEO";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Dynamically updates <title> + meta as user scrolls
  usePageSEO(activeSection);

  return (
    <div className="font-sans antialiased bg-white selection:bg-blue-200 pt-24">

      {/* Pass setActiveSection down so Navbar can drive SEO updates */}
      <Navbar onSectionChange={setActiveSection} />

      <Hero />
      <HowItWorks />
      <WhatWeBuild />
      <OurWork />
      <ClientReviews />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;