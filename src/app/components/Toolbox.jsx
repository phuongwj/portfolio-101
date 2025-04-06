'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
// import tools from "@/local-json/tools";
// import { Java, Javascript, Python, Mysql, C, Htmlcss, Nodejs, Reactjs, Expressjs, Nextjs, Scss, Tailwindcss, Framermotion } from "@/app/components/Tools";

// export const tools = [
//     { name: "Java", icon: Java},
// ]

export default function Toolbox() {
    return (
        <section className="bg-main w-full flex flex-col gap-10"> 
            <section className="flex justify-center">
                <h1 className="px-56 pt-32 font-bold text-5xl underline underline-offset-8 decoration-mainC decoration-4 text-white">
                    toolbox 
                </h1>
            </section>
            {/* <section className="h-7 w-1/2">
                <Marquee pauseOnHover speed={35} gradient gradientWidth={110} gradientColor='#191919'>
                    {tools.map( (tool) => (
                        <li key={tool} className="flex px-2 mx-1
                        font-semibold text-base cursor-pointer text-white/30 group-hover/bgg:text-white/65 transition duration-500">
                            {tool}
                        </li>
                    ))}
                </Marquee>
            </section> */}
        </section>
    )
}
