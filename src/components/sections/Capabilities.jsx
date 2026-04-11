// src/components/sections/Capabilities.jsx
// ─────────────────────────────────────────────────────────────
// Capabilities matrix. Two primary engagements (web platform
// and mobile MVP) presented as enterprise capability cards
// with deliverable lists.
// ─────────────────────────────────────────────────────────────

import { ArrowUpRight, Globe, Smartphone, Check } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Layout";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useReveal, staggerDelay } from "../../hooks/useReveal";

const CAPABILITIES = [
  {
    icon: Globe,
    code: "WEB-01",
    title: "Web Platform",
    subtitle: "SaaS dashboards, marketplaces, internal tools",
    description:
      "Full-stack web applications engineered for scale. Authentication, role-based access, payments, and analytics — wired to a real production database from day one.",
    deliverables: [
      "Type-safe React + Node.js application",
      "Postgres schema with migrations",
      "Authentication & role-based permissions",
      "Payment & subscription integration",
      "Deployment pipeline with previews",
      "Analytics & error monitoring",
    ],
    cta: "Scope a web platform",
    href: "https://wa.me/917980669925?text=Hi%20beyondten%2C%20I'd%20like%20to%20scope%20a%20web%20platform%20engagement.",
  },
  {
    icon: Smartphone,
    code: "MOB-01",
    title: "Mobile MVP",
    subtitle: "iOS & Android from a single codebase",
    description:
      "Production-ready cross-platform applications built on React Native and Expo. Native UX, real backend integration, ready for TestFlight and Play Console submission.",
    deliverables: [
      "React Native + Expo application",
      "iOS & Android builds",
      "Backend API & data layer",
      "Push notifications & deep links",
      "TestFlight / Play Console submission",
      "OTA update channel",
    ],
    cta: "Scope a mobile MVP",
    href: "https://wa.me/917980669925?text=Hi%20beyondten%2C%20I'd%20like%20to%20scope%20a%20mobile%20MVP%20engagement.",
  },
];

export default function Capabilities() {
  const { ref, isVisible } = useReveal();

  return (
    <Section id="capabilities" tone="page">
      <Container>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Capabilities"
            title="Two engagements. Production from day one."
            description="Both engagements ship a complete, deployed product within a ten-day delivery window. Pick the surface — we own the rest of the stack."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <article
                  key={cap.code}
                  className={`bt-card p-8 lg:p-10 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: staggerDelay(i, 150) }}
                >
                  {/* Header */}
                  <header className="flex items-start justify-between gap-4 mb-8 pb-8 border-b border-[var(--bt-border-subtle)]">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 flex items-center justify-center border border-[var(--bt-border-subtle)] rounded-[var(--bt-radius-sm)] bg-[var(--bt-surface-sunken)]">
                        <Icon
                          className="w-5 h-5 text-[var(--bt-accent-600)]"
                          strokeWidth={1.75}
                        />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {cap.code}
                        </Badge>
                        <h3 className="text-2xl font-semibold tracking-tight text-[var(--bt-ink-900)]">
                          {cap.title}
                        </h3>
                        <p className="text-[0.875rem] text-[var(--bt-ink-500)] mt-1">
                          {cap.subtitle}
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* Description */}
                  <p className="text-[0.9375rem] text-[var(--bt-ink-600)] leading-relaxed mb-8">
                    {cap.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)] mb-4">
                      Included deliverables
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                      {cap.deliverables.map((d, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-[0.875rem] text-[var(--bt-ink-700)]"
                        >
                          <Check
                            className="w-4 h-4 text-[var(--bt-accent-600)] mt-0.5 shrink-0"
                            strokeWidth={2.5}
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-6 border-t border-[var(--bt-border-subtle)]">
                    <Button
                      href={cap.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="md"
                      iconRight={<ArrowUpRight className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      {cap.cta}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
