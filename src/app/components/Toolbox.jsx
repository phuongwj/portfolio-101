import React from 'react';
import languages from "@/local-json/languages";


export default function Toolbox() {
  return (
    <>
      {/* Toolbox */}
        <section className="text-first w-full flex flex-col gap-4">

          {/* Toolbox Title */}
          <h1 className="text-lg font-medium"> technical skills </h1>

          {/* Language Box */}
          <section className="w-full flex flex-col rounded-2xl gap-4 p-4 shadow-2xl bg-[radial-gradient(circle_at_100%_20%,_#1F2A56_0%,_#0F1323_17%)]">

            {/* Language Title */}
            <h2> languages </h2>

            {/* Languages */}
            <ul className="flex flex-row gap-2">
              {languages.map((language) => (
                <li key={language}
                  className="py-1 px-2 mr-2 bg-widBg rounded-lg">
                  {language}
                </li>
              ))}
            </ul>
          </section>


          {/* <Marquee pauseOnHover speed={45} gradient gradientColor='#030712' gradientWidth={125}
            className="cursor-help">
            <ul className="flex flex-row gap-2 text-first">
              {tools.map((tool) => (
                <li key={tool} 
                  className="py-1 px-2 mr-2 bg-widBg rounded-lg">
                    {tool}
                </li>
              ))}
            </ul>
          </Marquee> */}
        </section>
    </>
  )
}
