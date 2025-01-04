import React from 'react';
import exps from "@/local-json/experiences";

export default function Experiences() {

    return (
        <section className="relative group/bgg">
            <section
                className="absolute h-full w-full bg-gradient-to-b from-white rounded-3xl blur opacity-25 group-hover/bgg:opacity-70 transition duration-700"
            >
            </section>
            <main className="relative flex flex-col gap-3 p-7 rounded-3xl shadow-xl bg-secondary border border-secondaryC">
                <section className="flex flex-row gap-2 pb-1">
                    <section className="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-white/45 group-hover/bgg:fill-white/80 transition duration-500">
                            <path fillRule="evenodd" 
                            d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clip-rule="evenodd" />
                        </svg>
                    </section>
                    <p className="font-bold text-xl text-white/45 group-hover/bgg:text-white/80 transition duration-500"> Experiences </p>
                </section>  
                <section className="h-30 px-4 overflow-y-scroll">
                    <ul className="max-h-full flex flex-col gap-4">
                        {exps.reverse().map( (exp) => (
                            <li key={exp.id} className="relative group/list flex flex-col transition duration-500 hover:bg-huh/30">
                                {/* Invisible checkbox */}
                                <input 
                                    className="absolute peer w-full h-6 z-10 opacity-0 cursor-pointer" 
                                    type="checkbox"
                                />
                                <section className="text-base flex flex-row pl-8 justify-between gap-32">
                                    <h2 className="group-hover/list:text-mainC/100 group-hover/bgg:text-white/65 text-white/30 transition duration-500 font-semibold">{exp.title}</h2>
                                    <p className="group-hover/list:text-white/50 group-hover/bgg:text-white/30 text-white/15 transition duration-500 font-medium">{exp.time}</p>
                                </section>
                                {/* Arrow Icon */}
                                <section className="absolute rotate-0 peer-checked:rotate-90 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 opacity-45 fill-white group-hover/list:fill-mainC transition duration-500">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" 
                                            clipRule="evenodd" />
                                    </svg>
                                </section>
                                {/* Content */}
                                <section className="overflow-hidden pl-8 transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                    <h3 className="text-base text-white/45">{exp.org}</h3>
                                    <h4 className="text-base text-white/45">{exp.location}</h4>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </section>
    )
}