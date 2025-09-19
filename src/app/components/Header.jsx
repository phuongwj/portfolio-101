import React from 'react';

export default function Header() {
  return (
    <>
      {/* Name and picture*/}
        <section className="w-full flex flex-row justify-between">
          <div>
            <h1 className="text-first text-md font-medium">phuong (julia) pham</h1>
            <h2 className="text-second text-sm font-medium max-w-[23rem]">Undergraduate Computer Science student at Dalhousie University</h2>
          </div>
          <img className="size-16 rounded-full" src="/phuongwj.jpg" alt="Julia's picture"/>
        </section>

        {/* Bit bout myself */}
        <section className="w-full">
          <h2 className="text-first text-2xl font-medium">
          originally from Saigon, Vietnam. after graduating highschool in 2023, i chose to study abroad in Canada to do my undergrad in Computer Science. i'm passionate about learning and working in areas like Full-Stack, Cloud and AI/ML.
          </h2>
        </section>
    </>
  )
}
