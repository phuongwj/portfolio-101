import React from 'react';

export default function About() {

  return (
    <main className="w-5/6 h-screen flex flex-row justify-between py-52 text-white">
        <h1 className="font-bold text-5xl underline underline-offset-8 decoration-mainC decoration-4">
            about 
        </h1>
        <p className="w-2/3 text-white/40 text-lg text-justify">
            born and raised in <span className="text-white/75">Saigon, Vietnam</span>, i was given a computer by my sister at an <span className="text-white/75">early age</span>. with it, i spent countless hours
            playing video games, watching and creating my own YouTube videos. that small exposure to tech sparked my interest, and as 
            i navigated the early stages of my life, my curiosity for tech continued to grow. eventually, i had to step out of my 
            comfort zone and pursue <span className="text-white/75">Computer Science</span> to reach my full potential. despite the constant struggles, i believe that <span className="text-white/75 underline underline-offset-4 decoration-mainC">hard work</span> will pay off!
        </p>
    </main>
  )
}
