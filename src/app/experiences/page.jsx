'use client';
import React, { useState } from 'react';
import exps from "@/local-json/experiences";
import Link from 'next/link';

export default function Experiences() {

    const [expandedId, setExpandedId] = useState(null);

    const expsSorted = exps.sort((a, b) => b.id - a.id);

    const handleClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    }

    const [contentIsHovered, setContentHovered] = useState(false);

    return (
        <div className="bg-newBg">
            <main className="py-32 min-h-screen w-full max-w-xl mx-auto flex flex-col items-center gap-12">
        
                <section className="w-full flex flex-col gap-4">
                    {/* Experience Title */}
                    <h1 className="text-first text-lg font-medium underline underline-offset-4"> experience</h1>

                    {/* List of Experiences */}
                    <section className="flex justify-center">
                        <ul className="flex flex-col gap-2">
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
            </main>
        </div>
    )
}
