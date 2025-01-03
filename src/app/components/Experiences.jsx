import React from 'react'
import exps from "@/local-json/experiences"

export default function Experiences() {
    return (
        <div className="relative group">
            <div
                className="absolute h-full w-full bg-gradient-to-b from-white rounded-3xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-500">
            </div>
            <main className="relative flex flex-col gap-3 p-6 rounded-3xl shadow-xl bg-secondary border border-secondaryC">
                <section className="font-bold text-xl pb-1 text-white opacity-70">
                    Experiences
                </section>
                <section className="h-28 px-4 overflow-y-scroll">
                    <ul className="max-h-full flex flex-col gap-4">
                        {exps.reverse().map( (exp) => (
                            <li key={exp.id} className="relative flex flex-col">
                                {/* Invisible checkbox */}
                                <input 
                                    className="absolute peer w-full h-6 z-10 opacity-0" 
                                    type="checkbox"
                                />
                                <section className="text-base flex flex-row justify-between gap-32">
                                    {/* Arrow Icon */}
                                    <section className="flex flex-row">
                                        <div className="opacity-0">hing</div>
                                        <h2 className="text-white font-semibold opacity-45">{exp.title}</h2>
                                    </section>
                                    <p className="text-secondaryC font-medium">{exp.time}</p>
                                </section>
                                <section className="absolute rotate-0 peer-checked:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4D4D4D" 
                                                className="size-6 rotate-0 transition-transform duration-500 peer-checked:rotate-180">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </section>
                                {/* Content */}
                                <section className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
                                    <h3 className="text-base text-secondaryC">{exp.org}</h3>
                                    <h4 className="text-base text-secondaryC">{exp.location}</h4>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}


/*
<p class="text-white border-2 border-secondaryC opacity-70">
    testing
    border-b-1
</p>
*/
