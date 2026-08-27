/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        accentSoft: "rgb(var(--c-accent-soft) / <alpha-value>)",
        white: "rgb(var(--c-text) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flowLine: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        sweep: "sweep 0.9s cubic-bezier(0.22,1,0.36,1)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22,1,0.36,1)",
      },
      borderRadius: {
        card: "var(--r-card)",
        btn: "var(--r-btn)",
        pill: "var(--r-pill)",
        sm2: "var(--r-sm)",
      },
    },
  },
  plugins: [],
};
