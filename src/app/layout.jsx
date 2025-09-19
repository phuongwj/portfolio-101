import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@/css/globals.css";
import Meteors from "@/app/components/Meteors"
import Navbar from '@/app/components/Navbar';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=""> 
      <body className={`${geistSans.className} bg-newBg`}>
        {/* <div className="relative"> 
          <Meteors number={10}/>
        </div> */}
        <Navbar/>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
