import { Geist, Geist_Mono, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { cx } from "../Utils";
import Header from "../components/header";

// const geistSans = Geist({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-sans"
// });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in"
});

const manRope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr"
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className = {cx(inter.variable, manRope.variable, "font-mr bg-light dark:bg-dark")}
        // className={`${inter.variable} ${manRope.variable} font-mr bg-light dark:bg-dark`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
