import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        meshBlack: "#111111",
        meshWhite: "#FFFFFF",
        meshYellow: "#FFD21F",
        meshOffWhite: "#F7F7F3",
        meshGray: "#777777",
        meshDarkGray: "#1E1E1E",
        meshLightGray: "#EFEFE9",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        handwrite: ["var(--font-handwriting)", "cursive", "sans-serif"],
      },
      boxShadow: {
        retro: "5px 5px 0px 0px #111111",
        retroYellow: "5px 5px 0px 0px #FFD21F",
        retroWhite: "5px 5px 0px 0px #FFFFFF",
        retroLg: "8px 8px 0px 0px #111111",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        dash: {
          to: { strokeDashoffset: "-40" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        dash: "dash 2s linear infinite",
        "spin-slow": "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
