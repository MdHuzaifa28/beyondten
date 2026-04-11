// src/App.jsx
// ─────────────────────────────────────────────────────────────
// Root composition. Order:
//   Hero → TrustBar → Capabilities → Process → Work →
//   Testimonials → FAQ → Contact → Footer
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Capabilities from "./components/sections/Capabilities";
import Process from "./components/sections/Process";
import Work from "./components/sections/Work";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { usePageSEO } from "./hooks/usePageSEO";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  usePageSEO(activeSection);

  return (
    <div className="font-sans antialiased bg-[var(--bt-surface-page)] text-[var(--bt-ink-900)]">
      <Navbar onSectionChange={setActiveSection} />
      <Hero />
      <TrustBar />
      <Capabilities />
      <Process />
      <Work />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
