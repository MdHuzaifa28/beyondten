// src/hooks/usePageSEO.js
// ─────────────────────────────────────────────────────────────
// Dynamically updates <title> and meta description as the
// user scrolls between sections. Section IDs match the new
// enterprise structure.
// ─────────────────────────────────────────────────────────────

import { useEffect } from "react";

const SEO_MAP = {
  hero: {
    title: "beyondten — Engineering studio for production software, delivered in 10 days",
    description:
      "beyondten is an engineering studio building production-grade web and mobile software for ambitious product teams. Senior craftsmanship, ten-day delivery cadence, guaranteed 24-hour response.",
  },
  capabilities: {
    title: "Capabilities — Web platforms & mobile MVPs | beyondten",
    description:
      "Two engagement types built to ship in ten days: full-stack web platforms and cross-platform mobile MVPs. Production from day one.",
  },
  process: {
    title: "Process — A 10-day engineering sprint cadence | beyondten",
    description:
      "A disciplined ten-day delivery cadence with daily checkpoints and tagged deliverables. See exactly how a beyondten engagement runs.",
  },
  work: {
    title: "Selected work — Live engagements | beyondten",
    description:
      "Production software shipped by beyondten. Real users, real URLs, real results.",
  },
  engagement: {
    title: "Engagements — Trusted by founders | beyondten",
    description:
      "Founders and operators who shipped production software with beyondten in ten working days.",
  },
  faq: {
    title: "FAQ — Engagement model & process | beyondten",
    description:
      "Answers to the most common questions about engagement model, scope, stack, and the ten-day delivery cadence.",
  },
  contact: {
    title: "Contact — Start an engagement | beyondten",
    description:
      "Reach out to beyondten. Guaranteed reply within twenty-four hours. Currently accepting new engagements.",
  },
};

const DEFAULT_SEO = SEO_MAP.hero;

export function usePageSEO(activeSectionId) {
  useEffect(() => {
    const seo = SEO_MAP[activeSectionId] ?? DEFAULT_SEO;

    document.title = seo.title;

    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    set('meta[name="description"]', "content", seo.description);
    set('meta[property="og:title"]', "content", seo.title);
    set('meta[property="og:description"]', "content", seo.description);
    set('meta[name="twitter:title"]', "content", seo.title);
    set('meta[name="twitter:description"]', "content", seo.description);
  }, [activeSectionId]);
}
