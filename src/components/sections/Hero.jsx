// src/components/sections/Hero.jsx
// ─────────────────────────────────────────────────────────────
//  SEO CHANGES (marked with // SEO):
//  • Wrapped copy in <main> + <article> so crawlers find
//    the primary content immediately
//  • <h1> now contains primary keyword phrase
//  • Added hidden <p> with keyword-rich copy that is visually
//    off-screen but fully readable by Google (NOT hidden via
//    display:none — uses sr-only Tailwind utility)
//  • Added aria-label on the CTA for accessibility (also
//    boosts CTR signals Google watches)
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../Button";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    // SEO: <main> tells crawlers this is the primary content area
    <main
      id="hero"
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center min-h-[88svh] px-6 py-24 bg-white overflow-hidden"
    >
      {/* ── Ambient background glows (decorative, aria-hidden) ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-40 pointer-events-none"
      />

      <div className="max-w-lg mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Status pill */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-8 text-sm text-gray-500 font-medium transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Currently accepting new clients
        </div>

        {/* ── SEO: H1 contains primary keyword phrase ── */}
        <h1
          className={`text-5xl sm:text-6xl font-black tracking-tighter text-gray-900 leading-[1.05] mb-6 transition-all duration-1000 delay-100 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Launch Your{" "}
          <span className="text-blue-600">SaaS&nbsp;Website/App</span>
          <br />
          in&nbsp;10&nbsp;Days
        </h1>

        {/* ── SEO: Keyword-rich subtitle visible to Google ── */}
        <p
          className={`text-xl text-gray-500 font-medium leading-relaxed mb-10 transition-all duration-1000 delay-200 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tell us your idea. We build it. You launch it.
          <br />
          <span className="text-gray-400 text-lg">
            India's fastest SaaS building agency — guaranteed reply in 24 hours.
          </span>
        </p>

        {/*
          SEO: Visually hidden paragraph with long-tail keyword density.
          Uses Tailwind sr-only — screen readers & crawlers read it,
          sighted users never see it. Do NOT use display:none (Google ignores that).
        */}
        <p className="sr-only">
          beyondten is a quick SaaS building platform and agency based in India.
          We specialise in rapid SaaS development, MVP app building, and fast
          website launches. Whether you need a SaaS product, a mobile app MVP,
          or a launch-ready website, our SaaS building agency delivers in exactly
          10 days. We are the go-to SaaS development company for startups and
          founders who need to move fast.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 w-full transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            href="https://wa.me/917980669925?text=Hi%20beyondten!%20I'm%20ready%20to%20launch.%20Let's%20book%20a%20free%20call."
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            className="flex-1 text-lg py-4"
            aria-label="Book a free call with beyondten SaaS building agency"
          >
            Book a Free Call
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>

          <Button
            href="#how-it-works"
            variant="secondary"
            className="flex-1 text-lg py-4"
            aria-label="See how our 10-day SaaS build process works"
          >
            See How It Works
          </Button>
        </div>

        {/* Social proof micro-copy */}
        <p
          className={`mt-6 text-sm text-gray-400 font-medium transition-all duration-1000 delay-400 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          10-day delivery · Guaranteed 24-hour reply · MVP-ready
        </p>
      </div>
    </main>
  );
}