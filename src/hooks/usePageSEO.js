// src/hooks/usePageSEO.js
// ─────────────────────────────────────────────────────────────
//  Dynamically updates <title> and meta description as the
//  user scrolls between sections.  Google sees the default
//  values baked into index.html, but this ensures social
//  share previews and browser history entries are accurate.
// ─────────────────────────────────────────────────────────────

import { useEffect } from "react";

const SEO_MAP = {
  hero: {
    title: "beyondten | #1 Quick SaaS Building Platform & Agency — Launch in 10 Days",
    description:
      "beyondten is India's fastest SaaS building agency. Launch your MVP app or website in exactly 10 days. Guaranteed 24-hour response.",
  },
  "how-it-works": {
    title: "How It Works — beyondten SaaS Building Agency",
    description:
      "See exactly how beyondten's 10-day SaaS build process works. Plan call → 10-day build → launch. Simple, fast, guaranteed.",
  },
  "what-we-build": {
    title: "SaaS Plans — Website & App in 10 Days | beyondten",
    description:
      "Choose your platform. beyondten builds websites and mobile apps as launch-ready MVPs in 10 days flat.",
  },
  work: {
    title: "Our Work — Live SaaS Projects | beyondten",
    description:
      "See live projects built by beyondten — India's quick SaaS building agency delivering MVPs in 10 days.",
  },
  reviews: {
    title: "Client Reviews — beyondten SaaS Building Agency",
    description:
      "Founders and startups love beyondten. Read reviews from clients who launched their SaaS and apps in just 10 days.",
  },
  faq: {
    title: "FAQ — beyondten Quick SaaS Builder",
    description:
      "Answers to the most common questions about beyondten's 10-day SaaS build process, pricing, and delivery.",
  },
};

const DEFAULT_SEO = SEO_MAP["hero"];

export function usePageSEO(activeSectionId) {
  useEffect(() => {
    const seo = SEO_MAP[activeSectionId] ?? DEFAULT_SEO;

    // Update <title>
    document.title = seo.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", seo.description);

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", seo.title);

    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", seo.description);

    // Update Twitter title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", seo.title);
  }, [activeSectionId]);
}