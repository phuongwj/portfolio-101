'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { tools } from "@/app/components/Tools";


export default function Toolbox() {
    return (
        <section className="bg-secondary w-full flex flex-col gap-5"> 
            <section className="flex justify-center">
                <h1 className="px-56 text-lg text-white/40">
                    the <span className="font-bold text-white/75 underline underline-offset-4 decoration-mainC"> toolbox </span>i've been working with
                </h1>
            </section>
            <section className="h-fit">
                <Marquee pauseOnHover speed={35} gradient gradientWidth={235} gradientColor='#191919'>
                    {Object.entries(tools).map(([name, svgProps] )=> (
                        <main key={name} className="mx-7">
                            <svg 
                                className="fill-secondaryC hover:fill-white hover:opacity-45 transition duration-500"
                                xmlns={svgProps.xmlns} 
                                viewBox={svgProps.viewBox} 
                                transform={svgProps.transform}
                                width="75px" 
                                height="75px">
                                    <path d={svgProps.path}/>
                            </svg>
                        </main>
                    ))}
                </Marquee>
            </section>
        </section>
    )
}
