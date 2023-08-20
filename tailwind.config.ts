import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nunitoSans: ["var(--font-nunito-sans)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in": "slide-in .75s ease-out forwards",
        "slide-out": "slide-out .75s ease-out forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%) translateY(-100%)" },
          "100%": { transform: "translateX(-50%) translateY(0%)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(-50%) translateY(0%)" },
          "100%": { transform: "translateX(100%) translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
