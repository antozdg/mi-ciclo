import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: "#3D0845",
        "plum-deep": "#2A0638",
        magenta: "#FF1FA3",
        orange: "#FF6A00",
        yellow: "#FFE94D",
        lavender: "#C97EFF",
        "pink-light": "#FFB3EC",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-magenta-orange": "linear-gradient(135deg, #FF1FA3, #FF6A00)",
        "gradient-yellow-pink": "linear-gradient(135deg, #FFE94D, #FFB3EC)",
        "gradient-plum-magenta": "linear-gradient(135deg, #3D0845, #FF1FA3)",
        "gradient-orange-yellow": "linear-gradient(135deg, #FF6A00, #FFE94D)",
      },
    },
  },
  plugins: [],
};

export default config;
