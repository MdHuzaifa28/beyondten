// src/components/sections/Testimonials.jsx
// ─────────────────────────────────────────────────────────────
// Client testimonials in enterprise editorial format.
// ─────────────────────────────────────────────────────────────

import { Quote } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Layout";
import Badge from "../ui/Badge";
import { useReveal, staggerDelay } from "../../hooks/useReveal";

const TESTIMONIALS = [
  {
    code: "REF-001",
    quote:
      "We needed a website for our university fest, FLAYER'25. They delivered a fully working site — no delays, no tech headaches.",
    headline: "Fast and exactly what we needed.",
    author: "Event Organizer",
    role: "FLAYER'25",
    initial: "F",
  },
  {
    code: "REF-002",
    quote:
      "I had an app idea and couldn't wait months. beyondten gave me a working product in ten days. I showed it to my first users the same week.",
    headline: "The clearest path from idea to launch.",
    author: "Startup Founder",
    role: "Tech Entrepreneur",
    initial: "T",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useReveal();

  return (
    <Section
      id="engagement"
      tone="sunken"
      className="border-y border-[var(--bt-border-subtle)]"
    >
      <Container>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Engagements"
            title="Trusted by founders who needed to ship."
            description="A small sample of the operators we've shipped production software for."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.code}
                className={`bt-card p-8 lg:p-10 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: staggerDelay(i, 150) }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--bt-border-subtle)]">
                  <Badge variant="outline">{t.code}</Badge>
                  <Quote
                    className="w-5 h-5 text-[var(--bt-accent-500)]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-[var(--bt-ink-900)] leading-snug mb-5">
                    {t.headline}
                  </h3>
                  <p className="text-[0.9375rem] text-[var(--bt-ink-600)] leading-relaxed">
                    {t.quote}
                  </p>
                </blockquote>

                {/* Author */}
                <figcaption className="mt-8 pt-6 border-t border-[var(--bt-border-subtle)] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[var(--bt-radius-sm)] border border-[var(--bt-border-subtle)] bg-[var(--bt-accent-50)] text-[var(--bt-accent-700)] font-semibold flex items-center justify-center">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[0.9375rem] font-semibold text-[var(--bt-ink-900)]">
                      {t.author}
                    </div>
                    <div className="text-[0.8125rem] text-[var(--bt-ink-500)]">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
