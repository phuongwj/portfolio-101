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
        <main>
            <ul className="h-20 flex flex-row gap-7 text-white text-lg opacity-45 overflow-x-auto">
                <section>
                    {
                        exps.reverse().map( (exp) => (
                            <li>
                                {exp.title}
                            </li>
                        ))
                    }
                </section>
                <section>
                    {
                        exps.map( (exp) => (
                            <li>
                                {exp.time}
                            </li>
                        ))
                    }
                </section>
            </ul>
        </main>
    )
}

/*
<p class="text-white border-2 border-secondaryC opacity-70">
    testing
</p>
*/
