'use client';
import React from 'react';
import exps from "@/local-json/experiences";
import Link from 'next/link';

export default function Experiences() {

    const expsSorted = exps.sort((a, b) => b.id - a.id);

    return (
        <section className="h-screen w-40 py-12 mx-auto flex flex-col gap-4 items-center">
            <header className="flex flex-row gap-2 self-start">
                <h1 className="font-bold text-5xl transition duration-500 text-white/80"> My experiences </h1>
                <section className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-12 fill-mainC">
                        <path fillRule="evenodd" 
                        d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                    </svg>
                </section>
            </header> 
            <section className="w-full items-center gap-5.5">
                <hr className="border-2 border-gray-800 rounded-full grow"/>
            </section>
            <p className="text-justify text-white/20 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud 
            </p>
            <main className="h-28 group/bgg flex flex-col"> 
                <section className="h-auto flex justify-center">
                    <ul className="flex flex-col w-fit gap-4 pr-1">
                        {expsSorted.map((exp) => (
                            <li key={exp.id} className="relative group/list flex flex-col transition duration-500 hover:bg-huh/30">
                                {/* Invisible checkbox */}
                                <input 
                                    className="absolute peer w-full h-6 z-10 opacity-0 cursor-pointer" 
                                    type="checkbox"
                                />
                                <section className="text-base flex flex-row justify-between pl-8">
                                    <h2 className="text-white/30 group-hover/bgg:text-white/65 group-hover/list:text-mainC/100 group-hover/bgg:group-hover/list:text-mainC/100 transition duration-500 font-semibold">{exp.title}</h2>
                                    <p className="text-white/15 group-hover/bgg:text-white/30 group-hover/bgg:group-hover/list:text-white/50 transition duration-500 font-medium">{exp.time}</p>
                                </section>
                                {/* Arrow Icon */} 
                                <section className="absolute rotate-0 peer-checked:rotate-90 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-white/30 group-hover/bgg:fill-white/65 group-hover/bgg:group-hover/list:fill-mainC/100 transition duration-500">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" 
                                            clipRule="evenodd" />
                                    </svg>
                                </section>
                                {/* Content */}
                                <section className="overflow-hidden pl-8 transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                    <h3 className="text-base text-white/20 group-hover/bgg:text-white/45 transition duration-500 mb-0.5">{exp.org} | {exp.location}</h3>
                                    <h4 className="text-base text-white/20 group-hover/bgg:text-white/45 transition duration-500">{exp.info} {exp.id === 2 ? <span> Check out the website </span>: ""} <span> {exp.id === 2 ? <Link href="https://hci4good.cs.dal.ca/" className="font-semibold underline" target="_blank"> here</Link> : ""} </span> </h4>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </section>
    )
}

// bg-secondary border transition duration-700 group-hover/bgg:border-secondaryC border-secondaryC/40


