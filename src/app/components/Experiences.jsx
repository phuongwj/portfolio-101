import React from 'react'
import exps from "@/local-json/experiences"

export default function Experiences() {
    return (
        <div className="relative group">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <main className="relative flex flex-col gap-3 p-8 rounded-3xl shadow-xl bg-secondary">
                <section className="font-bold text-2xl pb-1 text-white opacity-70">
                    Experiences
                </section>
                <section className="h-44 px-4 overflow-y-scroll">
                    <ul className="max-h-full flex flex-col gap-4">
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
