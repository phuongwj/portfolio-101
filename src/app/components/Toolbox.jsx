'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import tools from "@/local-json/tools";

export default function Toolbox() {
    return (
        <section className="bg-main w-full px-44 flex flex-col gap-10"> 
            <h1 className="pt-32 font-bold text-5xl underline underline-offset-8 decoration-mainC decoration-4 text-white">
                toolbox 
            </h1>
            <section className="h-7">
                <Marquee pauseOnHover speed={35} gradient gradientWidth={110} gradientColor='#191919'>
                    {tools.map( (tool) => (
                        <li key={tool} className="flex px-2 mx-1
                        font-semibold text-base cursor-pointer text-white/30 group-hover/bgg:text-white/65 transition duration-500">
                            {tool}
                        </li>
                    ))}
                </Marquee>
            </section>
        </section>
    )
}
