import { Geist, Geist_Mono } from "next/font/google";
import "@/css/globals.css";


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
  description: "personal portfolio :)",
};

// Please checkout branch winter right now, it's so beautiful <3
export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className="bg-main">
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
