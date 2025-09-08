import React, { useState } from 'react';
import skills from "@/local-json/technical-skills";

export default function Toolbox() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full flex flex-col gap-4">

      <section>
        <h1 className="text-first text-lg font-medium"> technical skills </h1>
      </section>

      {/* Toolbox */}
      <section className="flex flex-col items-center gap-4">
        {/* Tabs */}
        <div className="w-fit bg-widBg rounded-lg p-1">
          {skills.map((skill, index) => (
            <button
              key={skill.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 rounded-lg border-1 transition-colors duration-300
                ${activeTab === index
                  ? "border-[#393d4d] text-first bg-[#1a1e2b]"
                  : "border-transparent text-second bg-transparent hover:bg-[#1a1e2b]"}`}
            >
              {skill.title}
            </button>
          ))}
        </div>
        
      </section>
    </section>
  )
}
