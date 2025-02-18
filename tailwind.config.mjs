import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "7B00D3",
        accentDark: "#ffdb4d",
        gray:"#747474",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        mr:["var(--font-mr)"],
        in:["var(--font-in)"]
        // sans: ["var(--font-geist-sans)"]
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      screens:{
        sxl: "1180px", // for @media query(1180px)
        xs: "480px" // for @media query(480px)
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
  