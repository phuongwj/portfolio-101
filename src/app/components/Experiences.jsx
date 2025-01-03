import React from 'react'
import exps from "@/local-json/experiences"

export default function Experiences() {
    return (
        <div className="relative group">
            <div
                className="absolute h-full w-full bg-gradient-to-b from-white rounded-3xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-500">
            </div>
            <main className="relative flex flex-col gap-3 p-7 rounded-3xl shadow-xl bg-secondary border border-secondaryC">
                <section className="font-bold text-xl pb-1 text-white/80">
                    Experiences
                </section>
                <section className="h-30 px-4 overflow-y-scroll">
                    <ul className="max-h-full flex flex-col gap-4">
                        {exps.reverse().map( (exp) => (
                            <li key={exp.id} className="relative flex flex-col transition duration-500 hover:bg-huh/30 ">
                                {/* Invisible checkbox */}
                                <input 
                                    className="absolute peer w-full h-6 z-10 opacity-0 cursor-pointer" 
                                    type="checkbox"
                                />
                                <section className="text-base flex flex-row pl-8 justify-between gap-32">
                                    <h2 className="text-white font-bold opacity-65">{exp.title}</h2>
                                    <p className="text-white font-medium opacity-30">{exp.time}</p>
                                </section>
                                {/* Arrow Icon */}
                                <section className="absolute rotate-0 peer-checked:rotate-90 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6 opacity-45">
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
        </div>
    )
}