import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import projs from "@/local-json/projects";

export default function Projects() {

    {/* For Projects */}
    const projsSorted = projs.sort((a, b) => b.id - a.id);
    
    const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2350,
    };
    
  return (
    <>
      {/* Projects */}
        <section className="w-full flex flex-col gap-4">

          {/* Projects Title */}
          <Link href="/projects"
            className="w-fit inline-flex items-center gap-1 text-first fill-first text-lg font-medium hover:underline hover:underline-offset-4 hover:opacity-60 ease-in-out transition duration-300">
            <span>projects</span>
            <span className="pt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5">
                <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/>
              </svg>
            </span>
          </Link>

          {/* Content */}
          <div className="w-full overflow-hidden">
            <Slider {...settings}>
              {projsSorted.map((proj) => (
                <div key={proj.id} className="relative">
                  {/* Project Image */}
                  <img src={proj.image} alt={proj.alt} className="rounded-t-2xl" />

                  {/* Project Overlay Label */}
                  <div className="bg-widBg p-4 gap-1 rounded-b-2xl">
                    <h3 className="text-first text-base font-semibold">{proj.title}</h3>
                    <p className="text-second text-sm">{proj.tools}</p>
                  </div>
                </div>
              ))}
            </Slider>
           </div>
        </section>
    </>
  )
}
