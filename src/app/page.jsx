'use client';
import Header from "@/app/components/Header";
import Experiences from "@/app/components/Experiences";
import Quote from "@/app/components/Quote";
import Projects from "@/app/components/Projects";
import Toolbox from "@/app/components/Toolbox";

export default function page() {
  return (
    <main className="py-20 min-h-screen w-full max-w-4xl mx-auto flex flex-col items-center gap-12">
      <Header/>
      <Experiences/>
      <Quote/>
      <Projects/>
      <Toolbox/>
    </main>
  )
}