'use client';
import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import Header from "@/app/components/Header";
import Experiences from "@/app/components/Experiences";
import Projects from "@/app/components/Projects";
import Toolbox from "@/app/components/Toolbox";

export default function page() {
  return (
    <main className="flex flex-col items-center">
          <Header/>
          <section>
              <Experiences/>
              {/* <Projects/>
              <Toolbox/> */}
          </section>
    </main>
  )
}

//flex flex-col py-12 gap-8 max-w-[690px]
