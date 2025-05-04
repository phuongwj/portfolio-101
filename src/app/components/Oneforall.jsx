'use client'
import React, { useState } from 'react';
import exps from "@/local-json/experiences";
import Link from 'next/link';

export default function Oneforall() {

  const [expandedId, setExpandedId] = useState(null);
  
  const expsSorted = exps.sort((a, b) => b.id - a.id);
  
  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  }

  return (
    <div className="min-h-screen">

      {/* The top */}
      <header className="fixed w-full flex flex-row p-5 justify-between">
        {/* Music Widget */}
        <div>
          
        </div>

        {/* Icons */}
        <div className="flex flex-row gap-2 ">
          <Link href='https://github.com/phuongwj' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  className="bg-widBg p-1 rounded-lg h-6.5 w-6.5 fill-first hover:fill-first/70 hover:opacity-45 transition duration-500">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
          </Link>
          <Link href='https://www.linkedin.com/in/phuongwj/' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 32 448 448"
                  className="bg-widBg p-1 rounded-lg h-6.5 w-6.5 fill-first hover:fill-first/70 hover:opacity-45 transition duration-500">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
          </Link>
        </div>
      </header>

      {/* Main section */}
      <main className="py-32 min-h-screen w-full max-w-xl mx-auto flex flex-col items-center gap-12">

        {/* Name and picture*/}
        <section className="w-full flex flex-row justify-between">
          <div>
            <h1 className="text-first text-md font-medium">phuong (julia) pham</h1>
            <h2 className="text-second text-sm font-medium max-w-[23rem]">undergraduate Computer Science student at Dalhousie University</h2>
          </div>
          <img className="size-16 rounded-full" src="/phuongwj.jpg" alt="Julia's picture"/>
        </section>

        {/* Bit bout myself */}
        <section className="w-full">
          <h2 className="text-first text-2xl font-medium">
          <span className="text-second">originally from</span> Saigon, Vietnam. <span className="text-second">in 2023, i chose to</span> study abroad in Canada to pursue a degree in Computer Science. <span className="text-second">i'm passionate about learning and working in areas like</span> Full-Stack, Cloud and Machine Learning.
          </h2>
        </section>

        {/* Experiences */}
        <section className="w-full flex flex-col gap-4">

          {/* Title */}
          <h1 className="text-first text-lg font-medium underline underline-offset-4"> experience</h1>

          {/* List of Experiences */}
          <section className="flex justify-center">
              <ul className="flex flex-col gap-4">
                  {expsSorted.map((exp) => (
                      <li key={exp.id} className="relative group/list flex flex-col transition duration-500">

                          {/* Invisible checkbox */}
                          <input 
                              className="absolute peer w-full h-12 z-10 opacity-0 cursor-pointer" 
                              type="checkbox"
                              checked={expandedId === exp.id}
                              onChange={() => handleClick(exp.id)}
                          />

                          {/* Position & Place */}
                          <section className="text-md p-3 pl-9 rounded-lg flex flex-row justify-between bg-widBg group-hover/list:bg-first transition duration-500">
                              <h2 className="text-first group-hover/list:text-widBg transition duration-500 font-medium">{exp.title} {exp.org} </h2>
                              <p className="text-second transition duration-500 font-medium">{exp.time}</p>
                          </section>

                          {/* Arrow Icon */} 
                          <section className="absolute p-3.5 rotate-0 peer-checked:rotate-90 transition-all duration-500">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-first group-hover/list:fill-widBg transition duration-500">
                                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" 
                                      clipRule="evenodd" />
                              </svg>
                          </section>

                          {/* Content */}
                          <section className={`overflow-hidden pl-8 transition-all duration-500 ${expandedId === exp.id ? 'max-h-32' : 'max-h-0'}`}>
                              <h3 className="text-white/45 transition duration-500 mb-0.5">- {exp.location}</h3>
                              <h4 className="text-white/45 transition duration-500">{exp.info} {exp.id === 2 ? <span> Check out the website </span>: ""} <span> {exp.id === 2 ? <Link href="https://hci4good.cs.dal.ca/" className="font-semibold underline" target="_blank"> here</Link> : ""} </span> </h4>
                          </section>
                      </li>
                  ))}
              </ul>
            </section>
        </section>
      </main>
    </div>
  )
}
