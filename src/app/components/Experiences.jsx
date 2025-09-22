import React, { useState } from 'react';
import Link from 'next/link';
import exps from "@/local-json/experiences";


export default function Experiences() {
      
    const expsSorted = exps.sort((a, b) => b.id - a.id);

  return (
    <>
      {/* Experiences */}
        <section className="w-full flex flex-col gap-4">

          {/* Experience Title */}
          <div
            className="w-fit text-first text-2xl font-light">
            <span>experience</span>
          </div>
          
          {/* List of Experiences */}
          <section className="flex justify-center">
              <ul className="flex flex-col gap-2 w-full">
                  {expsSorted.slice(0, 4).map((exp) => (
                      <li key={exp.id} className="flex flex-col">

                        {/* Company Logo & the Position, Company */}
                        <section className="text-md py-2 px-3 rounded-xl flex flex-row bg-widBg">
                          <div className="flex items-center gap-3">

                            <img
                              src={exp.image}
                              alt={`${exp.org} logo`}
                              className="w-11 h-11 object-contain rounded-lg bg-white"
                            />

                            <div className="flex flex-col">
                              <h2 className="text-first font-medium">{exp.title}</h2>
                              <h3 className="text-second text-sm">{exp.org}</h3>
                            </div>
                          </div>
                        </section>
                      </li>
                  ))}
              </ul>
            </section>
        </section>
    </>
  )
}