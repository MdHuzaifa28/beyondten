// src/components/sections/TrustBar.jsx
// ─────────────────────────────────────────────────────────────
// Trust bar — three value pillars (quality / expertise /
// velocity) followed by a stack marquee. Sits directly under
// the hero to anchor the enterprise positioning.
// ─────────────────────────────────────────────────────────────

import { ShieldCheck, Layers, Gauge } from "lucide-react";
import { Container, Section } from "../ui/Layout";
import { useReveal, staggerDelay } from "../../hooks/useReveal";

const PILLARS = [
  {
    icon: ShieldCheck,
    label: "Quality",
    title: "Production-grade by default",
    desc: "Type-safe codebases, accessible UI, observability hooks, and a deployment pipeline you can keep building on.",
  },
  {
    icon: Layers,
    label: "Expertise",
    title: "Senior engineering only",
    desc: "Founders work directly with senior engineers and designers. No account managers, no junior offshoring, no handoffs.",
  },
  {
    icon: Gauge,
    label: "Velocity",
    title: "Ten-day sprint cadence",
    desc: "A disciplined ten-day delivery window with daily checkpoints. Speed is the byproduct of a process built around clarity.",
  },
];

const STACK = [
  "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL",
  "Prisma", "Supabase", "Vercel", "AWS", "Stripe", "React Native", "Expo",
  "Framer Motion", "shadcn/ui", "tRPC",
];

export default function TrustBar() {
  const { ref, isVisible } = useReveal();

  return (
    <Section
      id="capabilities-intro"
      tone="raised"
      className="!py-20 lg:!py-24 border-y border-[var(--bt-border-subtle)]"
    >
      <Container>
        <div ref={ref} className="grid lg:grid-cols-3 gap-px bg-[var(--bt-border-subtle)] border border-[var(--bt-border-subtle)] rounded-[var(--bt-radius-lg)] overflow-hidden">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className={`bg-[var(--bt-surface-raised)] p-8 lg:p-10 group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[var(--bt-surface-sunken)]
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: staggerDelay(i, 120) }}
              >
                {/* Icon block */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-10 h-10 flex items-center justify-center border border-[var(--bt-border-subtle)] rounded-[var(--bt-radius-sm)] bg-[var(--bt-accent-50)] group-hover:bg-[var(--bt-accent-100)] transition-colors">
                    <Icon
                      className="w-4.5 h-4.5 text-[var(--bt-accent-600)]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)]">
                    0{i + 1} / {p.label}
                  </span>
                </div>

                <h3 className="text-xl lg:text-[1.375rem] font-semibold tracking-tight text-[var(--bt-ink-900)] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[0.9375rem] text-[var(--bt-ink-600)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stack marquee */}
        <div className="mt-16 flex items-center gap-8">
          <div className="shrink-0 bt-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bt-ink-500)]">
            Stack
          </div>
          <div className="flex-1 h-px bg-[var(--bt-border-subtle)]" />
          <div className="overflow-hidden flex-1 max-w-2xl [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex bt-marquee whitespace-nowrap gap-10">
              {[...STACK, ...STACK].map((tech, i) => (
                <span
                  key={i}
                  className="bt-mono text-[0.8125rem] text-[var(--bt-ink-600)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
