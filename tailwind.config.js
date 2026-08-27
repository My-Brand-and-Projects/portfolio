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
        ink: "#0b0d10",
        surface: "#0f1216",
        panel: "#15191f",
        muted: "#8b93a1",
        line: "#222831",
        accent: "#5b8cff",
        accentSoft: "#9bb6ff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
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
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },
  plugins: [],
};
