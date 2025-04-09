import React from 'react';

export default function About() {

  return (
    <main className="bg-secondary h-screen flex flex-col justify-between px-56 gap-10 text-white">
        <h1 className="pt-32 font-bold text-5xl underline underline-offset-8 decoration-mainC decoration-4">
            about 
        </h1>
        <p className="pb-96 text-white/40 text-lg text-justify">
            born and raised in <span className="text-white/75">Saigon, Vietnam</span>, i was given a computer by my sister at an <span className="text-white/75">early age</span>. with it, i spent countless hours
            playing video games, watching and <span className="text-white/75">creating</span> my own YouTube videos. that small exposure to tech sparked my interest, and as 
            i navigated the early stages of my life, my curiosity for tech continued to grow. despite the fear of not being able to keep up in the tech field, i eventually had to step out of my comfort zone  
            to reach my <span className="text-white/75">full potential</span>. therefore, given the <span className="text-white/75"> opportunity to study abroad in Canada</span>, i chose <span className="text-white/75">Computer Science</span>. 
            currently, i'm in the <span className="text-white/75">2nd year of my CS degree at Dalhousie University</span>. although it's a constant struggle, i believe that <span className="text-white/75 underline underline-offset-4 decoration-mainC">hard work</span> will pay off!
        </p>
    </main>
  )
}
