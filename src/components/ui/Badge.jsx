// src/components/ui/Badge.jsx
// ─────────────────────────────────────────────────────────────
// Badge / pill primitive. Variants align with status colors.
// ─────────────────────────────────────────────────────────────

const variants = {
  neutral: "bg-[var(--bt-ink-100)] text-[var(--bt-ink-700)] border-[var(--bt-border-subtle)]",
  accent:  "bg-[var(--bt-accent-50)] text-[var(--bt-accent-700)] border-[var(--bt-accent-100)]",
  success: "bg-[var(--bt-success-100)] text-[var(--bt-success-600)] border-[var(--bt-success-100)]",
  warning: "bg-[var(--bt-warning-100)] text-[#8a6116] border-[var(--bt-warning-100)]",
  inverse: "bg-white/10 text-white/90 border-white/15 backdrop-blur",
  outline: "bg-transparent text-[var(--bt-ink-700)] border-[var(--bt-border-strong)]",
};

export default function Badge({
  children,
  variant = "neutral",
  className = "",
  withDot = false,
  pulse = false,
  icon,
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1
        text-[0.6875rem] font-medium uppercase tracking-[0.08em]
        rounded-[var(--bt-radius-xs)] border bt-mono
        ${variants[variant]} ${className}
      `}
    >
      {withDot && (
        <span className="relative inline-flex h-1.5 w-1.5">
          {pulse && (
            <span className="absolute inset-0 rounded-full bg-current opacity-60 animate-ping" />
          )}
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {icon}
      {children}
    </span>
  );
}
