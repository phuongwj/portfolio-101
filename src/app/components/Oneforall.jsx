'use client'
import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import exps from "@/local-json/experiences";
import tools from "@/local-json/tools";
import Link from 'next/link';

// This is the homepage if you're wondering why I name it like this...
export default function Oneforall() {

  {/* For Experiences */}
  const [expandedId, setExpandedId] = useState(null);
  
  const expsSorted = exps.sort((a, b) => b.id - a.id);
  
  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  } 

  const [contentIsHovered, setContentHovered] = useState(false);

  {/* For Projects */}
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
    <div className="min-h-screen">

      {/* Main section */}
      <main className="py-32 min-h-screen w-full max-w-xl mx-auto flex flex-col items-center gap-12">

        {/* Name and picture*/}
        <section className="w-full flex flex-row justify-between">
          <div>
            <h1 className="text-first text-md font-medium">phuong (julia) pham</h1>
            <h2 className="text-second text-sm font-medium max-w-[23rem]">Undergraduate Computer Science student at Dalhousie University</h2>
          </div>
          <img className="size-16 rounded-full" src="/phuongwj.jpg" alt="Julia's picture"/>
        </section>

        {/* Bit bout myself */}
        <section className="w-full">
          <h2 className="text-first Stext-2xl font-medium">
          <span className="text-second">originally from</span> Saigon, Vietnam. <span className="text-second">after graduating highschool in 2023, i chose to</span> study abroad in Canada to do my undergrad in Computer Science. <span className="text-second">i'm passionate about learning and working in areas like</span> Full-Stack, Cloud and Machine Learning.
          </h2>
        </section>

        {/* Experiences */}
        <section className="w-full flex flex-col gap-4">

          {/* Experience Title */}
            <Link href="/experiences" className="text-first text-lg font-medium underline underline-offset-4"> experiences</Link>
          
          {/* List of Experiences */}
          <section className="flex justify-center">
              <ul className="flex flex-col gap-2">
                  {expsSorted.slice(0, 4).map((exp) => (
                      <li key={exp.id} className="relative group/list flex flex-col transition duration-500">

                          {/* Invisible checkbox */}
                          <input 
                              className="absolute peer w-full h-12 z-10 opacity-0 cursor-pointer" 
                              type="checkbox"
                              checked={expandedId === exp.id}
                              onChange={() => handleClick(exp.id)}
                          />

                          {/* Position & Place */}
                          <section className={contentIsHovered 
                            ? "text-md p-3 pl-9 rounded-lg flex flex-row justify-between bg-widBg transition duration-500"
                            : "text-md p-3 pl-9 rounded-lg flex flex-row justify-between bg-widBg group-hover/list:bg-first transition duration-500"}>
                              <h2 className={contentIsHovered 
                              ? "text-first transition duration-500 font-medium"
                              : "text-first group-hover/list:text-widBg transition duration-500 font-medium"}>{exp.title} {exp.org} </h2>
                              <p className="text-second transition duration-500 font-medium">{exp.time}</p>
                          </section>

                          {/* Arrow Icon */} 
                          <section className="absolute p-3.5 rotate-0 peer-checked:rotate-90 transition-all duration-500">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                                className={contentIsHovered
                                ? "size-5 fill-first transition duration-500"
                                : "size-5 fill-first group-hover/list:fill-widBg transition duration-500"}>
                                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" 
                                      clipRule="evenodd" />
                              </svg>
                          </section>

                          {/* Content */}
                          <section 
                            className={`mt-2 rounded-lg overflow-hidden bg-widBg/50 transition-all duration-500
                            ${expandedId === exp.id ? 'max-h-40 opacity-100 px-8 py-3' : 'max-h-0 opacity-0 py-0'}`}
                            onMouseEnter={() => setContentHovered(true)}
                            onMouseLeave={() => setContentHovered(false)}
                          >
                              <h3 className="text-second transition duration-500 mb-0.5">- {exp.location}</h3>
                              <h4 className="text-second transition duration-500">{exp.info} {exp.id === 2 ? <span> Check out the website </span>: ""} <span> {exp.id === 2 ? <Link href="https://hci4good.cs.dal.ca/" className="font-semibold underline" target="_blank"> here</Link> : ""} </span> </h4>
                          </section>
                      </li>
                  ))}
              </ul>
            </section>
        </section>
        
        {/* Projects */}
        <section className="w-full flex flex-col gap-4">

          {/* Projects Title */}
          <h1 className="text-first text-lg font-medium underline underline-offset-4"> projects</h1>

          {/* Content */}
          <div className="w-full overflow-hidden">
            <Slider {...settings}>
                <div>
                  <img src="/orerry.png" className="rounded-2xl" alt="solar system simulator"/>
                </div>
                <div>
                  <img src="/portfolio.png" className="rounded-2xl" alt="portfolio website"/>
                </div>
                <div>
                  <img src="/bathtime.png" className="rounded-2xl" alt="clean a stereotypical cs student"/>
                </div>
                <div>
                  <img src="/compiler.png" className="rounded-2xl" alt="front-end compiler"/>
                </div>
                <div>
                  <img src="/tienlen.png" className="rounded-2xl" alt="vietnamese card game"/>
                </div>
                <div>
                  <img src="/insanity.png" className="rounded-2xl" alt="highscore game, shoot projectiles"/>
                </div>
            </Slider> 
           </div>

           <p className="text-second">description for each project will be added soon, please stay tune :)</p>
        </section>

        {/* Toolbox */}
        <section className="w-full flex flex-col gap-4">

          {/* Toolbox Title */}
          <h1 className="text-first text-lg font-medium underline underline-offset-4"> toolbox</h1>

          <Marquee pauseOnHover speed={45} gradient gradientColor='#030712' gradientWidth={125}
            className="cursor-help">
            <ul className="flex flex-row gap-2 text-first">
              {tools.map((tool) => (
                <li key={tool} 
                  className="py-1 px-2 mr-2 bg-widBg rounded-lg">
                    {tool}
                </li>
              ))}
            </ul>
          </Marquee>
        </section>
      </main>
    </div>
  )
}
