'use client';
import React, { useState, useEffect } from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import Header from "@/app/components/Header";
import Experiences from "@/app/components/Experiences";
import Projects from "@/app/components/Projects";
import Toolbox from "@/app/components/Toolbox";
import About from "@/app/components/About";
import fetchTrack from "@/app/fetchTrack";

export default function page() {

  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function getTrack () {
      const trackData = await fetchTrack();
      if (isMounted) {
        setCurrentTrack(trackData);
      }
    };

    getTrack();

    setTimeout(getTrack, 10000);
  }, []);

  return (
    <main className="flex flex-col items-center">
          <Header currentTrack={currentTrack}/>
          <About/>
          <Experiences/>
          {/* <Projects/>
          <Toolbox/> */}
    </main>
  )
}

//flex flex-col py-12 gap-8 max-w-[690px]
