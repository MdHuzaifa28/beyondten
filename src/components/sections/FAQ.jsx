// src/components/sections/FAQ.jsx
// ─────────────────────────────────────────────────────────────
// FAQ accordion in the new design system.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Layout";
import { useReveal, staggerDelay } from "../../hooks/useReveal";

const FAQS = [
  {
    q: "How quickly will I hear back after reaching out?",
    a: "Within 24 hours, guaranteed. We treat the response window as part of the engagement — if speed matters to you, it has to start at the first touch.",
  },
  {
    q: "What exactly do I receive at the end of ten days?",
    a: "A production-deployed application with your core feature set, real authentication, a real database, monitoring, and a deployment pipeline. It is a launch, not a prototype — built to be extended, not rebuilt.",
  },
  {
    q: "Does the ten-day clock include the discovery call?",
    a: "No. The first 24 hours is your guaranteed reply. We then schedule a discovery session to align on scope and architecture. The ten-day sprint clock starts the morning after that session.",
  },
  {
    q: "Can we add features after the initial sprint?",
    a: "Yes. The ten-day sprint ships a launch-ready foundation. After go-live we transition into a steady-cadence relationship where additional features are scoped and shipped at a normal engineering pace.",
  },
  {
    q: "How do you maintain quality on a ten-day timeline?",
    a: "Discipline. We run a strict three-engagement cap, work with senior engineers only, and follow a sprint structure where every day has a defined deliverable. Speed is the byproduct of clarity, not corner-cutting.",
  },
  {
    q: "What does the engineering stack look like?",
    a: "TypeScript across the stack — React or Next.js on the frontend, Node.js for the API layer, PostgreSQL for data, deployed on Vercel or AWS. Mobile builds use React Native and Expo. Choices are consistent so we move fast and you inherit a maintainable codebase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useReveal();

  return (
    <Section id="faq" tone="page">
      <Container>
        <div ref={ref} className="grid lg:grid-cols-12 gap-12">
          {/* Left column — header */}
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers, before you ask."
              description="The questions we hear most often from founders evaluating an engagement."
              maxWidth="100%"
            />
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-[var(--bt-border-subtle)]">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`border-b border-[var(--bt-border-subtle)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    style={{ transitionDelay: staggerDelay(i, 60) }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-5">
                        <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-400)] mt-1.5 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[1.0625rem] font-semibold text-[var(--bt-ink-900)] leading-snug pr-4">
                          {faq.q}
                        </h3>
                      </div>
                      <div
                        className={`shrink-0 mt-1 w-7 h-7 flex items-center justify-center rounded-[var(--bt-radius-xs)] border border-[var(--bt-border-subtle)] transition-all duration-500
                          ${isOpen
                            ? "bg-[var(--bt-ink-900)] border-[var(--bt-ink-900)] text-white rotate-45"
                            : "bg-white text-[var(--bt-ink-500)] group-hover:border-[var(--bt-ink-900)] group-hover:text-[var(--bt-ink-900)]"}
                        `}
                      >
                        <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-12 pr-12 pb-6 -mt-1">
                          <p className="text-[0.9375rem] text-[var(--bt-ink-600)] leading-relaxed max-w-[60ch]">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
