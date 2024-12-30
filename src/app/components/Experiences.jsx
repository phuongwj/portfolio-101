/*
Make the scroller like monkeytype lol, it's pretty darn good.
I don't know how the boxes are gonna be like because of the
color contrast stuffs, I've created a testing div inside 
Header.jsx to see how the color contrast works out, so be 
sure to check that out. 
Maybe make it similar to monkeytype, but make it different too
because you don't want it to be too similar you know.

- Do the box similar to the testing box inside Header.jsx

- Get data from json, take the last index and put it first
(i.e. last dictionary from the list)
*/

import React from 'react'
import exps from "@/local-json/experiences"

export default function Experiences() {
    return (
        <main className="h-44 overflow-y-scroll">
            <ul className="max-h-full flex flex-col gap-7">
                {exps.reverse().map( (exp) => (
                    <li key={exp.id} className="flex flex-col">
                        <section className="text-lg flex flex-row justify-between gap-32">
                            <h2 className="text-white font-semibold opacity-45">{exp.title}</h2>
                            <p className="text-secondaryC font-medium">{exp.time}</p>
                        </section>
                        <h3 className="text-base text-secondaryC">{exp.org}</h3>
                        <h4 className="text-base text-secondaryC">{exp.location}</h4>
                    </li>
                ))}
            </ul>
        </main>
    )
}


/*
<p class="text-white border-2 border-secondaryC opacity-70">
    testing
</p>
*/
