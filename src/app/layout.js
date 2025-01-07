import { Geist, Geist_Mono } from "next/font/google";
import "@/css/globals.css";
import Header from "@/app/components/Header";
import Experiences from "@/app/components/Experiences";
// import Projects from "@/app/components/Projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "phuongwj",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className="bg-main">
        <main className="flex min-h-screen px-32 gap-24">
          <Header/>
          <section className="flex flex-col py-12 gap-10 max-w-[690px]">
            <Experiences/>
            {/* <Projects/> */}
          </section>
        </main>
        {children}
      </body>
    </html>
  );

  /*
  Add <div> inside <body>
  Add <Header/> inside <div>
  Add <section> under <Header/>
  Add <Experiences/> inside <section>
  Add <Projects/> inside <section>
  Add <Tools/> inside <section>
  Make <div> flex, make that there's a gap in between
  Look at Brittany's example.
  */

  /*
  - Make a heart for the icon website, colour it blue. 
  5.
  - Make a loading screen a milk carton? lol like the background is the 
  same as the background now, but darker, and then slowly fill it blue...
  */
}
