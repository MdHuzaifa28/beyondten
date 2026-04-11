// src/components/ui/Button.jsx
// ─────────────────────────────────────────────────────────────
// Single Button primitive. All CTAs across the site use this.
// Variants: primary | secondary | ghost | inverse
// Sizes:    sm | md | lg
// ─────────────────────────────────────────────────────────────

const variants = {
  primary: `
    bg-[var(--bt-accent-500)] text-white border border-[var(--bt-accent-500)]
    hover:bg-[var(--bt-accent-600)] hover:border-[var(--bt-accent-600)]
    active:bg-[var(--bt-accent-700)]
    shadow-[0_1px_2px_0_rgba(15,98,254,0.25)]
  `,
  secondary: `
    bg-white text-[var(--bt-ink-900)] border border-[var(--bt-border-strong)]
    hover:border-[var(--bt-ink-900)] hover:bg-[var(--bt-ink-50)]
  `,
  ghost: `
    bg-transparent text-[var(--bt-ink-900)] border border-transparent
    hover:bg-[var(--bt-ink-100)]
  `,
  inverse: `
    bg-white text-[var(--bt-ink-900)] border border-white
    hover:bg-[var(--bt-ink-100)]
  `,
  inverseGhost: `
    bg-transparent text-white border border-white/30
    hover:bg-white/10 hover:border-white/60
  `,
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-14 px-7 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  iconRight,
  iconLeft,
  ...props
}) {
  const cls = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-[var(--bt-radius-sm)]
    transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bt-accent-500)] focus-visible:ring-offset-2
    cursor-pointer whitespace-nowrap
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
}
