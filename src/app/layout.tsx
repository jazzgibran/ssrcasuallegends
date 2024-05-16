import type { Metadata } from "next";
import { Montaga } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "@/components/scrollToTop";

const montaga = Montaga({ weight: ["400"],subsets: ["latin"],variable: '--font-mont', });
const scaly = localFont({src: '../assets/ScalySans.otf', variable: '--font-scaly',})

export const metadata: Metadata = {
  title: {
    template: '%s - Casual Legends',
    default: 'Casual Legends',
  },
  description: "Casual Legends is an immersive role-playing adventure game. It is an RPG similar to D&D in which you roll the dice at key moments to determine your level of success or failure. But more importantly, it is a theatre of the mind in which you co-create the story and the world with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montaga.variable} ${scaly.variable} font-scaly`}>
      <main>
        <ScrollToTop/>
      <Navbar/>
      {children}
      <Footer/>
      </main>
        </body>
    </html>
  );
}
