// src/lib/tokens.js
// ─────────────────────────────────────────────────────────────
// Design tokens exposed to JS. Mirrors src/index.css.
// Use this when you need a token value in a component prop
// (e.g., chart colors). For styles, prefer CSS variables.
// ─────────────────────────────────────────────────────────────

export const tokens = {
  color: {
    ink: {
      900: "#0a0e1a",
      800: "#111827",
      700: "#1f2937",
      600: "#374151",
      500: "#6b7280",
      400: "#9ca3af",
      300: "#d1d5db",
      200: "#e5e7eb",
      100: "#f3f4f6",
      50:  "#f9fafb",
    },
    accent: {
      700: "#065f46",
      600: "#047857",
      500: "#059669",
      400: "#10b981",
      300: "#34d399",
      100: "#d1fae5",
      50:  "#ecfdf5",
    },
    surface: {
      page: "#fafbfc",
      raised: "#ffffff",
      sunken: "#f4f6f9",
      inverse: "#0a0e1a",
    },
    border: {
      subtle: "#e6e8ec",
      strong: "#c6cad1",
      focus:  "#059669",
    },
    success: { 500: "#24a148", 100: "#defbe6" },
    warning: { 500: "#f1c21b", 100: "#fcf4d6" },
  },
  motion: {
    easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
    durationFast: 200,
    durationBase: 400,
    durationSlow: 700,
  },
};

export default tokens;
