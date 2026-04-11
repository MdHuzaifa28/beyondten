// src/components/ui/Layout.jsx
// ─────────────────────────────────────────────────────────────
// Layout primitives shared by every section.
// ─────────────────────────────────────────────────────────────

export function Container({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`bt-container ${className}`}>{children}</Tag>;
}

export function Section({
  children,
  id,
  className = "",
  tone = "page", // page | sunken | inverse
  as: Tag = "section",
}) {
  const tones = {
    page:    "bg-[var(--bt-surface-page)] text-[var(--bt-ink-900)]",
    sunken:  "bg-[var(--bt-surface-sunken)] text-[var(--bt-ink-900)]",
    raised:  "bg-[var(--bt-surface-raised)] text-[var(--bt-ink-900)]",
    inverse: "bg-[var(--bt-surface-inverse)] text-white",
  };
  return (
    <Tag id={id} className={`bt-section ${tones[tone]} ${className}`}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "", inverse = false }) {
  return (
    <div
      className={`bt-eyebrow ${className}`}
      style={inverse ? { color: "var(--bt-accent-300)" } : undefined}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  maxWidth = "44rem",
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "";
  return (
    <div
      className={`flex flex-col gap-5 mb-14 ${alignCls}`}
      style={{ maxWidth }}
    >
      {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
      <h2
        className="bt-display-2"
        style={inverse ? { color: "white" } : undefined}
      >
        {title}
      </h2>
      {description && (
        <p
          className="bt-lead"
          style={inverse ? { color: "rgba(255,255,255,0.7)" } : undefined}
        >
          {description}
        </p>
      )}
    </div>
  );
}
