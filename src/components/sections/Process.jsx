// src/components/sections/Process.jsx
// ─────────────────────────────────────────────────────────────
// Engineering sprint timeline. Structured ten-day cadence
// presented as a true delivery schedule, with daily checkpoints
// and tagged deliverables.
// ─────────────────────────────────────────────────────────────

import { Package, GitCommit, Rocket } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui/Layout";
import Badge from "../ui/Badge";
import { useReveal, staggerDelay } from "../../hooks/useReveal";

const PHASES = [
  {
    code: "P-00",
    name: "Discovery",
    duration: "Pre-sprint",
    body: "A planning session to align on scope, success criteria, and the architectural shape of the build. We translate your idea into an engineering brief.",
  },
];

const TIMELINE = [
  {
    day: "01",
    range: "Day 1",
    title: "Design system & brand foundation",
    desc: "Color, typography, components, and tokens locked into a shared design library.",
    deliverable: "Design System",
  },
  {
    day: "02",
    range: "Day 2",
    title: "Live landing surface",
    desc: "Public-facing landing page deploys to a real URL and evolves with the product.",
    deliverable: "Landing Page",
  },
  {
    day: "03",
    range: "Day 3",
    title: "Information architecture",
    desc: "Sitemap, user flows, and screen inventory documented and approved.",
    deliverable: "Sitemap",
  },
  {
    day: "04",
    range: "Day 4",
    title: "Data architecture",
    desc: "Database schema designed, deployed, and seeded. Migrations versioned from day one.",
  },
  {
    day: "05–06",
    range: "Days 5–6",
    title: "Backend & API layer",
    desc: "Authentication, business logic, and API endpoints. The engine under the hood.",
  },
  {
    day: "07–09",
    range: "Days 7–9",
    title: "Frontend implementation",
    desc: "All screens built, wired to the API, and refined to production quality.",
  },
  {
    day: "10",
    range: "Day 10",
    title: "Production deployment",
    desc: "Final QA, deployment to production, monitoring setup, and handover. The product ships.",
    deliverable: "Live Product",
    isLast: true,
  },
];

export default function Process() {
  const { ref, isVisible } = useReveal();

  return (
    <Section id="process" tone="sunken" className="border-y border-[var(--bt-border-subtle)]">
      <Container>
        <div ref={ref}>
          <SectionHeader
            eyebrow="Process"
            title="A ten-day delivery cadence built on engineering discipline."
            description="Speed without process is chaos. Our sprint is engineered for predictability — daily checkpoints, tagged deliverables, and a working build at every stage."
          />

          {/* Discovery card — sits above the timeline */}
          <div
            className={`bt-card p-7 mb-12 grid md:grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-[var(--bt-radius-sm)] border border-[var(--bt-border-subtle)] bg-[var(--bt-surface-sunken)]">
                <GitCommit className="w-5 h-5 text-[var(--bt-accent-600)]" strokeWidth={1.75} />
              </div>
              <Badge variant="accent">PHASE-00</Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--bt-ink-900)] mb-1">
                Discovery & engineering brief
              </h3>
              <p className="text-[0.875rem] text-[var(--bt-ink-600)]">
                A scoping session to translate your idea into an architectural plan.
                Sprint clock starts the morning after.
              </p>
            </div>
            <div className="md:text-right">
              <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)]">
                Duration
              </div>
              <div className="text-[0.9375rem] font-medium text-[var(--bt-ink-900)]">
                Pre-sprint
              </div>
            </div>
          </div>

          {/* Sprint header */}
          <div className="flex items-center gap-4 mb-8">
            <Badge variant="accent" withDot pulse>
              Sprint Active
            </Badge>
            <div className="flex-1 h-px bg-[var(--bt-border-subtle)]" />
            <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)]">
              10-Day Build Window
            </span>
          </div>

          {/* Timeline */}
          <div className="bt-card overflow-hidden">
            <div className="grid grid-cols-[auto_1fr] divide-y divide-[var(--bt-border-subtle)]">
              {/* Header row */}
              <div className="col-span-2 grid grid-cols-[120px_1fr] bg-[var(--bt-surface-sunken)] border-b border-[var(--bt-border-subtle)]">
                <div className="px-6 py-3 bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)] border-r border-[var(--bt-border-subtle)]">
                  Day
                </div>
                <div className="px-6 py-3 bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)]">
                  Milestone
                </div>
              </div>

              {/* Rows */}
              {TIMELINE.map((row, i) => (
                <div
                  key={i}
                  className={`col-span-2 grid grid-cols-[120px_1fr] group hover:bg-[var(--bt-surface-sunken)] transition-colors duration-300
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "700ms",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: staggerDelay(i, 60),
                  }}
                >
                  {/* Day cell */}
                  <div className="px-6 py-6 border-r border-[var(--bt-border-subtle)] flex items-start gap-3">
                    <span
                      className={`bt-mono text-[0.9375rem] font-semibold tracking-tight tabular-nums
                        ${row.isLast ? "text-[var(--bt-accent-600)]" : "text-[var(--bt-ink-900)]"}`}
                    >
                      {row.day}
                    </span>
                  </div>

                  {/* Content cell */}
                  <div className="px-6 py-6">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className="text-[0.9375rem] font-semibold text-[var(--bt-ink-900)] flex items-center gap-2">
                        {row.isLast && (
                          <Rocket
                            className="w-4 h-4 text-[var(--bt-accent-600)]"
                            strokeWidth={2}
                          />
                        )}
                        {row.title}
                      </h4>
                      {row.deliverable && (
                        <Badge variant="accent" className="shrink-0">
                          <Package className="w-2.5 h-2.5" />
                          {row.deliverable}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[0.8125rem] text-[var(--bt-ink-500)] leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer summary */}
            <div className="bg-[var(--bt-ink-900)] text-white px-8 py-6 grid sm:grid-cols-3 gap-6">
              <div>
                <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50 mb-1">
                  Tagged deliverables
                </div>
                <div className="text-2xl font-semibold tracking-tight">04</div>
              </div>
              <div>
                <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50 mb-1">
                  Daily checkpoints
                </div>
                <div className="text-2xl font-semibold tracking-tight">10</div>
              </div>
              <div>
                <div className="bt-mono text-[10px] uppercase tracking-[0.14em] text-white/50 mb-1">
                  Final outcome
                </div>
                <div className="text-2xl font-semibold tracking-tight">
                  Live product
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
