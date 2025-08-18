import React from 'react';

export default function Quote() {
  return (
    <>
      {/* Quote */}
        <section className="w-full flex flex-col gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="2rem" height="1.5rem" viewBox="0 0 512 512">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f3f7fa" stroke="none">
            <path d="M0 3370 l0 -1100 548 -2 547 -3 5 -95 c34 -652 -302 -1010 -983 -1047 l-117 -6 0 -234 0 -235 153 6 c509 22 845 79 1152 199 429 166 710 454 819 842 62 220 59 143 63 1518 l4 1257 -1096 0 -1095 0 0 -1100z"/>
            <path d="M2930 3370 l0 -1100 545 0 544 0 7 -36 c4 -20 4 -108 1 -197 -4 -130 -10 -181 -30 -260 -107 -407 -423 -625 -949 -654 l-118 -6 0 -234 0 -235 158 7 c449 18 778 70 1062 167 523 179 825 499 929 980 38 178 41 287 41 1496 l0 1172 -1095 0 -1095 0 0 -1100z"/>
            </g>
          </svg>
          <h1 className="text-second font-medium">even on the toughest day, something good can happen to you</h1>
        </section>
    </>
  )
}
