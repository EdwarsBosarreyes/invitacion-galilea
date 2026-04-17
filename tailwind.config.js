/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kpopPink: "#FF007A",
        kpopCyan: "#00F0FF",
        kpopDark: "#050505",
      },
      fontFamily: {
        warrior: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [],
};

export default config;
