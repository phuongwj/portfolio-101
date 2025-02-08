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

    return (
        <div className="w-5/6 h-screen flex flex-row justify-between py-52 text-white">
            <div className="flex flex-col">
                <h1 className="font-bold text-5xl underline underline-offset-8 decoration-mainC decoration-4"> experience </h1>
            </div>
            <main className="w-3/5 flex flex-col"> 
                <section className="h-auto flex justify-center">
                    <ul className="flex flex-col gap-4">
                        {expsSorted.map((exp) => (
                            <li key={exp.id} className="relative group/list flex flex-col transition duration-500 hover:bg-huh/30">
                                {/* Invisible checkbox */}
                                <input 
                                    className="absolute peer w-full h-6 z-10 opacity-0 cursor-pointer" 
                                    type="checkbox"
                                    checked={expandedId === exp.id}
                                    onChange={() => handleClick(exp.id)}
                                />
                                <section className="text-base flex flex-row justify-between pl-8">
                                    <h2 className="text-white/65 group-hover/list:text-mainC/100 transition duration-500 font-semibold">{exp.title} {exp.org} </h2>
                                    <p className="text-white/30 group-hover/list:text-white/50 transition duration-500 font-medium">{exp.time}</p>
                                </section>
                                {/* Arrow Icon */} 
                                <section className="absolute rotate-0 peer-checked:rotate-90 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-white/65 group-hover/list:fill-mainC/100 transition duration-500">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" 
                                            clipRule="evenodd" />
                                    </svg>
                                </section>
                                {/* Content */}
                                <section className={`overflow-hidden pl-8 transition-all duration-500 ${expandedId === exp.id ? 'max-h-40' : 'max-h-0'}`}>
                                    <h3 className="text-base text-white/45 transition duration-500 mb-0.5">- {exp.location}</h3>
                                    <h4 className="text-base text-white/45 transition duration-500">{exp.info} {exp.id === 2 ? <span> Check out the website </span>: ""} <span> {exp.id === 2 ? <Link href="https://hci4good.cs.dal.ca/" className="font-semibold underline" target="_blank"> here</Link> : ""} </span> </h4>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}

// bg-secondary border transition duration-700 group-hover/bgg:border-secondaryC border-secondaryC/40


