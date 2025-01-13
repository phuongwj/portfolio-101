import React from 'react';
import Marquee from 'react-fast-marquee';
import tools from "@/local-json/tools";

export default function Toolbox() {
    return (
        <section className="relative group/bgg">
            <section
                className="absolute h-full w-full rounded-3xl blur bg-gradient-to-b from-white opacity-25 group-hover/bgg:opacity-70 transition duration-700"
            >
            </section>
            <main className="relative flex flex-col gap-3 px-7 pt-7 pb-3 rounded-3xl shadow-xl bg-secondary border transition duration-700 group-hover/bgg:border-secondaryC border-secondaryC/40">
                <section className="flex flex-row gap-2 pb-1">
                    <section className="pt-1">
                        {/* Wrench-Screwdriver Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 transition duration-500 fill-white/45 group-hover/bgg:fill-mainC">
                            <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                            <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                            <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </section>
                    <p className="font-bold text-xl text-white/45 transition duration-500 group-hover/bgg:text-white/80"> My toolbox </p>
                </section>  
                <section className="h-7">
                    <Marquee pauseOnHover>
                        {tools.map( (tool) => (
                            <li key={tool} className="bg-huh/10 group-hover/bgg:bg-huh/25 rounded-xl flex px-2
                            font-bold text-base cursor-pointer text-white/30 group-hover/bgg:text-white/65">
                                {tool}
                            </li>
                        ))}
                    </Marquee>
                </section>
            </main>
        </section>
    )
}
