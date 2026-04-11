// src/components/Navbar.jsx
// ─────────────────────────────────────────────────────────────
// Enterprise-grade navbar. Full-width, sticky, hairline border.
// Tracks scroll for elevation. IntersectionObserver tracks
// active section for nav highlighting + drives SEO hook.
// ─────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { Container } from "./ui/Layout";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "process",      label: "Process" },
  { id: "work",         label: "Work" },
  { id: "engagement",   label: "Engagement" },
  { id: "faq",          label: "FAQ" },
];

const WHATSAPP_URL =
  "https://wa.me/917980669925?text=Hi%20beyondten%2C%20I'd%20like%20to%20discuss%20a%20project.";

export default function Navbar({ onSectionChange }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll elevation
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            if (onSectionChange) onSectionChange(id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    document.querySelectorAll("section[id], main[id]").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        bg-[var(--bt-surface-page)]/85 backdrop-blur-xl
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isScrolled
          ? "border-b border-[var(--bt-border-subtle)]"
          : "border-b border-transparent"}
      `}
    >
      <Container>
        <div className="h-16 flex items-center justify-between gap-8">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            aria-label="beyondten — home"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 bg-[var(--bt-ink-900)] rounded-[2px]" />
              <span className="relative bt-mono text-white text-[11px] font-semibold tracking-tighter">
                10
              </span>
            </div>
            <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-[var(--bt-ink-900)]">
              beyondten
            </span>
            <span className="hidden md:inline-flex bt-mono text-[10px] uppercase tracking-[0.12em] text-[var(--bt-ink-500)] border-l border-[var(--bt-border-subtle)] pl-2.5 ml-1">
              Engineering Studio
            </span>
          </a>

          {/* Center nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`
                    relative px-3.5 py-2 text-[0.875rem] font-medium
                    transition-colors duration-200
                    ${isActive
                      ? "text-[var(--bt-ink-900)]"
                      : "text-[var(--bt-ink-500)] hover:text-[var(--bt-ink-900)]"}
                  `}
                >
                  {link.label}
                  <span
                    className={`
                      absolute left-3.5 right-3.5 -bottom-[1px] h-[2px]
                      bg-[var(--bt-accent-500)]
                      transition-transform duration-300 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex text-[0.875rem] font-medium text-[var(--bt-ink-600)] hover:text-[var(--bt-ink-900)] transition-colors"
            >
              Contact
            </a>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
