import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: [
          "#D2D2D2",
          "#B4B4B4",
          "#8F8F8F",
          "#696969",
          "#444444",
          "#1E1E1E",
          "#191919",
          "#141414",
          "#0F0F0F",
          "#0A0A0A",
          "#060606",
        ] as any,
        secondary: [
          "#CCE6E6",
          "#AAD5D5",
          "#80C0C0",
          "#55AAAA",
          "#2A9595",
          "#008080",
          "#006B6B",
          "#005555",
          "#004040",
          "#002B2B",
          "#001A1A",
        ] as any,
        error: ["#C03A3A"] as any,
        warning: ["#E8BA18"] as any,
        success: ["#08875D"] as any,
      },
    },
  },
  plugins: [],
};
export default config;
