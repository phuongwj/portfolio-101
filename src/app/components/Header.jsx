'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Meteors from "./Meteors"

export default function Header() {
    const [isHover, setHover] = useState(false);

    return (
            <main className="flex flex-col h-screen w-full gap-y-2 bg-main items-center justify-center text-white px-6">

                <Meteors number={15}/>
                {/* Sm -> text-4xl; Md and above -> text-5xl */}
                <section className="flex flex-col font-bold md:text-5xl sm:text-4xl text-center">
                    <h1> nice to meet you, </h1>
                    <span className="flex flex-wrap justify-center gap-x-2">
                        i'm 
                            <span className={(isHover 
                                ? "text-white transition duration-500" 
                                : "text-mainC transition duration-500")}> 
                                phuong
                            </span>
                            <span>
                                - aka
                            </span>
                            <span className={(isHover 
                                ? "ml-1.5 text-mainC cursor-help opacity-100 transition duration-500" 
                                : "ml-1.5 cursor-help transition duration-500")}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)} > 
                                julia 
                            </span>
                    </span>
                </section>
                

                {/* Sm -> text-base; Md and above -> text-lg */}
                <p className="mt-4 text-white/50 sm:text-base md:text-lg">
                    an aspiring & dedicated developer
                </p>
                <footer className="w-fit flex flex-wrap gap-2 mt-3">
                    <Link href='https://github.com/phuongwj' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                            className="h-6.5 w-6.5 fill-secondaryC hover:fill-white hover:opacity-45 transition duration-500">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </Link>
                    <Link href='https://www.linkedin.com/in/phuongwj/' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 32 448 448"
                            className="h-6.5 w-6.5 fill-secondaryC hover:fill-white hover:opacity-45 transition duration-500">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18"
                        className="cursor-help h-6.5 w-6.5 fill-secondaryC hover:fill-white hover:opacity-45 transition duration-500">
                        <path d="M18,3H6C4.346,3,3,4.346,3,6v12c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V6C21,4.346,19.654,3,18,3z M15.738,14.489 c0,0.608-0.358,1.857-1.843,1.857c-0.478,0-1.348-0.397-1.348-1.156s0.628-1.476,1.606-1.476c0.724,0,0.912-0.346,0.912-0.833 c0-0.278-0.029-2.794-0.038-3.524c-0.001-0.106-0.099-0.178-0.202-0.157l-4.328,0.891c-0.146,0.03-0.252,0.159-0.252,0.309v5.383 c0,0.608-0.405,1.644-1.693,1.644c-0.847,0-1.433-0.36-1.433-1.242c0-0.704,0.764-1.416,1.692-1.416c0.316,0,0.804-0.13,0.804-0.673 c0-0.45,0.015-4.574,0.02-5.965c0.001-0.266,0.189-0.493,0.45-0.545l5.037-1c0.318-0.063,0.615,0.18,0.615,0.505V14.489z"/>
                    </svg>
                </footer>
            </main>
    )
}
