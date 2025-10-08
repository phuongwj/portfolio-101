import React, { useState } from 'react';
import skills from "@/local-json/technical-skills";

export default function Toolbox() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full flex flex-col gap-4">

      <section>
        <h1 className="text-first text-2xl font-light"> technical skills </h1>
      </section>

      {/* Toolbox */}
      <section className="flex flex-col items-center gap-4">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center w-fit bg-widBg rounded-lg p-1">
          {skills.map((skill, index) => (
            <button
              key={skill.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 rounded-lg border-1 transition-colors duration-300
                ${activeTab === index
                  ? "border-[#666b83] text-first bg-widToolsBg"
                  : "border-transparent text-second bg-transparent hover:bg-widToolsBg"}`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        {/* Skill List */}
        <div className="w-full h-full bg-widBg py-4 rounded-lg flex flex-wrap gap-4 justify-center">
          {skills[activeTab].stuffs.map((stuff) => (
            <span
              key={stuff.alt}
              className="w-fit bg-widToolsBg text-first rounded-lg px-2 py-1 flex flex-row items-center gap-2" 
            >
              {stuff.image ? (
                <img src={stuff.image} alt={stuff.alt} className="h-5 w-5 object-contain" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              )}
              {stuff.element}
            </span>
          ))}
        </div>
        
      </section>
    </section>
  )
}
