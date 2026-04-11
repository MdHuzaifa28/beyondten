// src/components/sections/Footer.jsx
// ─────────────────────────────────────────────────────────────
// Slim legal footer. Lives below the dark Contact section.
// ─────────────────────────────────────────────────────────────

import { Container } from "../ui/Layout";

export default function Footer() {
  return (
    <footer className="bg-[var(--bt-ink-900)] border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 flex items-center justify-center bg-white rounded-[2px]">
              <span className="bt-mono text-[var(--bt-ink-900)] text-[10px] font-semibold tracking-tighter">
                10
              </span>
            </div>
            <span className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-white">
              beyondten
            </span>
            <span className="hidden md:inline-flex bt-mono text-[10px] uppercase tracking-[0.12em] text-white/40 border-l border-white/10 pl-2.5 ml-1">
              Engineering Studio
            </span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-6 text-[0.75rem] text-white/50">
            <span className="bt-mono uppercase tracking-[0.12em]">
              © {new Date().getFullYear()} beyondten
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/30" />
              Made in India
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
