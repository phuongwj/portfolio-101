import React from 'react';
import Marquee from "react-fast-marquee";
import tools from "@/local-json/tools";


export default function Toolbox() {
  return (
    <>
      {/* Toolbox */}
        <section className="w-full flex flex-col gap-4">

          {/* Toolbox Title */}
          <h1 className="text-first text-lg font-medium"> toolbox</h1>

          <Marquee pauseOnHover speed={45} gradient gradientColor='#030712' gradientWidth={125}
            className="cursor-help">
            <ul className="flex flex-row gap-2 text-first">
              {tools.map((tool) => (
                <li key={tool} 
                  className="py-1 px-2 mr-2 bg-widBg rounded-lg">
                    {tool}
                </li>
              ))}
            </ul>
          </Marquee>
        </section>
    </>
  )
}
