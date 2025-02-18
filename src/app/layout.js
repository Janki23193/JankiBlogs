import { Geist, Geist_Mono, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { cx } from "../Utils";
import Header from "../components/header";
import Footer from "../components/Footer";
import siteMetaData from "../Utils/siteMetadata";
import Script from "next/script";

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
  metadataBase: new URL(siteMetaData.siteURL),
  title: { 
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title, // a default is required when creating a template
    },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteURL,
    siteName: siteMetaData.title,
    images: [
      siteMetaData
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetaData.title,
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className = {cx(inter.variable, manRope.variable, "font-mr bg-light dark:bg-dark")}
        // className={`${inter.variable} ${manRope.variable} font-mr bg-light dark:bg-dark`}
      >
        <Script>
          {
            `if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }`
          }
        </Script>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
