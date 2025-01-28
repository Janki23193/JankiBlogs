/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      }
    },
  },
  plugins: [],
};
