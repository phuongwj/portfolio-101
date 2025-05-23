'use client';
import React, { useEffect, useRef, useState } from 'react';
import clsx from "clsx";

export default function Meteors({number}) {
  const containerRef = useRef(null);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateMeteors = () => {
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const spacingWidth = containerWidth / number;

      const newMeteors = new Array(number).fill(true).map((_, idx) => ({
        id: idx,
        top: -50,
        left: Math.floor(spacingWidth * idx),
        delay: Math.random() * 5,
        duration: Math.floor(Math.random() * (6 - 3) + 3),
      }));

      setMeteors(newMeteors);
    };

    generateMeteors();
    window.addEventListener('resize', generateMeteors);
    return () => window.removeEventListener('resize', generateMeteors);
  }, [number]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 h-52 w-full pointer-events-none overflow-hidden">
        {meteors.map((elem) => {
          return (
            <span
             key={`meteor-${elem.id}`}
             className={clsx(
                "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[45deg]",
                "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-14 before:h-[1px] before:bg-gradient-to-r before:from-[#555f6d] before:to-transparent"
             )}   
             style={{
                top: `${elem.top}px`, 
                left: `${elem.left}px`,
                animationDelay:  `${elem.delay}s`,
                animationDuration: `${elem.duration}s`,
             }}
            ></span>
          );
          })}
    </div>
  )
}
