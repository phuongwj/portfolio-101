import React from 'react'
import projs from "@/local-json/projects";

export default function  () {

    const projsSorted = projs.sort((a, b) => b.id - a.id);

    return (
        <section className="relative group/bgg">
            <section
                className="absolute h-full w-full rounded-3xl blur bg-gradient-to-b from-white opacity-25 group-hover/bgg:opacity-70 transition duration-700"
            >
            </section>
            <main className="relative flex flex-col gap-3 px-7 pt-7 pb-3 rounded-3xl shadow-xl bg-secondary border transition duration-700 group-hover/bgg:border-secondaryC border-secondaryC/40">
                <section className="flex flex-row gap-2 pb-1">
                    <section className="pt-1">
                        {/* Cloud Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 transition duration-500 fill-white/45 group-hover/bgg:fill-mainC">
                            <path fillRule="evenodd" 
                            d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                        </svg>
                    </section>
                    <p className="font-bold text-xl text-white/45 transition duration-500 group-hover/bgg:text-white/80"> Projects </p>
                </section>  
                <section className="h-40 px-4 overflow-y-scroll">
                    <ul className="flex flex-wrap gap-y-5">
                        {projsSorted.map((proj) => (
                            <li key={proj.id} className="relative group/list flex flex-col basis-1/2 transition duration-500 hover:bg-huh/30">
                                {/* Invisible checkbox */}
                                <input 
                                    className="absolute peer w-full h-6 z-10 opacity-0 cursor-pointer" 
                                    type="checkbox"
                                />
                                <section className="text-base pl-8 justify-between gap-32">
                                    <h2 className="text-white/30 group-hover/bgg:text-white/65 group-hover/list:text-mainC/100 group-hover/bgg:group-hover/list:text-mainC/100 transition duration-500 font-semibold">{proj.title}</h2>
                                </section>
                                {/* Arrow Icon */} 
                                <section className="absolute rotate-0 peer-checked:rotate-90 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-white/30 group-hover/bgg:fill-white/65 group-hover/bgg:group-hover/list:fill-mainC/100 transition duration-500">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" 
                                            clipRule="evenodd" />
                                    </svg>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </section>
    )
}
