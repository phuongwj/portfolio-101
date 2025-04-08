'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { tools } from "@/app/components/Tools";

// export const tools = [
//     { name: "Java", icon: Java},
// ]

export default function Toolbox() {
    return (
        <section className="bg-main w-full flex flex-col gap-10"> 
            <section className="flex justify-center">
                <h1 className="px-56 pt-14 font-bold text-5xl underline underline-offset-8 decoration-mainC decoration-4 text-white">
                    toolbox 
                </h1>
            </section>
            <section className="h-7">
                <Marquee pauseOnHover speed={35} gradient gradientWidth={110} gradientColor='#191919'>
                    {Object.entries(tools).map(([name, svgProps] )=> (
                        <main key={name} className="mx-4">
                            <svg 
                                xmlns={svgProps.xmlns} 
                                viewBox={svgProps.viewBox} 
                                width="45px" 
                                height="45px">
                                    <path d={svgProps.path}/>
                            </svg>
                        </main>
                    ))}
                </Marquee>
            </section>
        </section>
    )
}
