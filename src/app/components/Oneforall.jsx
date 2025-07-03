'use client'
import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import exps from "@/local-json/experiences";
import projs from "@/local-json/projects";
import tools from "@/local-json/tools";
import Link from 'next/link';

// This is the homepage if you're wondering why I name it like this...
export default function Oneforall() {

  {/* For Most Recent Track Fetching */}
  useEffect(() => {
    async function fetchTrack() {
      const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=phuongwj&api_key=${apiKey}&format=json`;

      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrack();
  }, [])

  {/* For Experiences */}
  const [expandedId, setExpandedId] = useState(null);
  
  const expsSorted = exps.sort((a, b) => b.id - a.id);
  
  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  } 

  const [contentIsHovered, setContentHovered] = useState(false);

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
          <h2 className="text-first text-2xl font-medium">
          <span className="text-second">originally from</span> Saigon, Vietnam. <span className="text-second">after graduating highschool in 2023, i chose to</span> study abroad in Canada to do my undergrad in Computer Science. <span className="text-second">i'm passionate about learning and working in areas like</span> Full-Stack, Cloud and Machine Learning.
          </h2>
        </section>

        {/* Experiences */}
        <section className="w-full flex flex-col gap-4">

          {/* Experience Title */}
          <Link href="/experiences"
            className="w-fit inline-flex items-center gap-1 text-first fill-first text-lg font-medium hover:underline hover:underline-offset-4 hover:opacity-60 ease-in-out transition duration-300">
            <span>experience</span>
            <span className="pt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5">
                <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/>
              </svg>
            </span>
          </Link>
          
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

        {/* Quote */}
        <section className="w-full flex flex-col gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="2rem" height="1.5rem" viewBox="0 0 512 512">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f3f7fa" stroke="none">
            <path d="M0 3370 l0 -1100 548 -2 547 -3 5 -95 c34 -652 -302 -1010 -983 -1047 l-117 -6 0 -234 0 -235 153 6 c509 22 845 79 1152 199 429 166 710 454 819 842 62 220 59 143 63 1518 l4 1257 -1096 0 -1095 0 0 -1100z"/>
            <path d="M2930 3370 l0 -1100 545 0 544 0 7 -36 c4 -20 4 -108 1 -197 -4 -130 -10 -181 -30 -260 -107 -407 -423 -625 -949 -654 l-118 -6 0 -234 0 -235 158 7 c449 18 778 70 1062 167 523 179 825 499 929 980 38 178 41 287 41 1496 l0 1172 -1095 0 -1095 0 0 -1100z"/>
            </g>
          </svg>
          <h1 className="text-second font-medium">"even on the toughest day, something good can happen to you"</h1>
        </section>
        
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

        {/* Toolbox */}
        <section className="w-full flex flex-col gap-4">

          {/* Toolbox Title */}
          <h1 className="text-first text-lg font-medium"> toolbox</h1>

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
