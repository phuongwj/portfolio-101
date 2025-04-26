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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=""> 
      <body className="">
        {children}
      </body>
    </html>
  );
}
