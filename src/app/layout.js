import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html class="bg-main" lang="en"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );

  /*
  1. Flex these both
  - Put <Header/> first (i.e. my name and all those short texts underneath)
  - Add links inside header.
  2. Flex these both
  - Put <Experience/> next
  - Put <Projects/> next
  3.
  - Put <Footer/> last, make it flex-end I think????? 
  4. 
  - Make a heart for the icon website, colour it blue. 
  5.
  - Make a loading screen a milk carton? lol like the background is the 
  same as the background now, but darker, and then slowly fill it blue...
  */
}
