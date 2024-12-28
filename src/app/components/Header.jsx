'use client';
import React from 'react';
import { useState } from 'react';

export default function Header() {
    const [isHover, setHover] = useState(false);

    return (
        <main class="w-fit text-white">
            <section class="flex flex-wrap font-bold text-3xl">
                <h1 class="opacity-70">
                    Hi, I'm 
                </h1>
                <h1 class={
                    (isHover ? "text-white opacity-45 transition duration-500" : "text-mainC opacity-100 transition duration-500")}
                >
                    &nbsp;Phuong
                </h1>
            </section>
            <section class="flex flex-wrap font-bold text-lg">
                <h2 class="opacity-45">
                    also known as 
                </h2>
                <h2 class={
                    (isHover ? "text-mainC opacity-100 transition duration-500" : "opacity-70 transition duration-500")}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    &nbsp;Julia
                </h2>
            </section>
            <p class="text-secondaryC">
                An aspiring & dedicated developer
            </p>
            <p class="border-2  border-secondaryC opacity-70">
                testing
            </p>
        </main>

    /*

    " hover:"
    After </main>, add in the section for em links.
    Make gaps in between the texts like how brittany has it.
    */

    /*
    Could make it so that right now Phuong is blue, when you 
    hover over Phuong, it will become gray (like aka's color)
    then Julia will become blue, like they swap. => do research
    */

    /*
    Don't allow hover for Phuong, just Julia, when hover over 
    Julia, Julia becomes blue and Phuong becomes the color of "aka"
    => Logic: When hover over Julia, Julia becomes blue, Phuong
    changes as well, when no more hovering over Julia, Phuong goes
    back to being blue. useState()????
    https://hackernoon.com/how-to-handle-hover-events-in-react
    something like this but we have tailwind.
    */
    )
}
