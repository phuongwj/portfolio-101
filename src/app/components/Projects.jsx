'use client';
import React, { useState }  from 'react';
import projs from "@/local-json/projects";

export default function  () {

    const projsSorted = projs.sort((a, b) => b.id - a.id);
    const [hovered, setHovered] = useState(null);

    return (
        <section className="relative group/bgg">
            <section
                className="absolute h-full w-full rounded-3xl blur bg-gradient-to-b from-white opacity-25 group-hover/bgg:opacity-70 transition duration-700"
            >
            </section>
            <main className="relative flex flex-col gap-3 px-7 pt-7 pb-3 rounded-3xl shadow-xl bg-secondary border transition duration-700 group-hover/bgg:border-secondaryC border-secondaryC/40">
                <section className="flex flex-row gap-2 pb-1">
                    <section className="pt-1">
                        {/* Puzzle Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 transition duration-500 fill-white/45 group-hover/bgg:fill-mainC">
                        <   path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                        </svg>
                    </section>
                    <p className="font-bold text-xl text-white/45 transition duration-500 group-hover/bgg:text-white/80"> Projects </p>
                </section>  
                <section className="h-48 px-4 overflow-y-scroll">
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4">
                        {projsSorted.map((proj) => (
                            <li key={proj.id} className="group/list flex flex-row basis-1/2 justify-between transition duration-500 py-5 bg-huh/10 group-hover/bgg:bg-huh/25 group-hover/bgg:hover:bg-main rounded-2xl">
                                <section className="text-sm pl-3 justify-between gap-32">
                                    <div className="text-white/30 group-hover/bgg:text-white/65 group-hover/list:text-mainC/100 group-hover/bgg:group-hover/list:text-mainC/100 transition duration-500 font-semibold">
                                        <h2 className={`transition-opacity duration-300 ${hovered === proj.id ? 'opacity-0' : 'opacity-100'}`}>
                                            {proj.title}
                                        </h2>
                                        <h2 className={`transition-opacity duration-300 ${hovered === proj.id ? 'opacity-100' : 'opacity-0'}`}>
                                            {proj.info}
                                        </h2>
                                    </div>
                                </section>
                                {/* Question Mark Icon */} 
                                <section className="pt-0.5 pr-2"
                                    onMouseEnter={() => setHovered(proj.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="size-4 fill-white/30 group-hover/bgg:fill-white/65 group-hover/bgg:group-hover/list:fill-mainC/100 transition duration-500">
                                        <path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                                    </svg>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </section>
    )
}
