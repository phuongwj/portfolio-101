import React from 'react'

export default function Header() {
  return (
    <section class="text-white w-fit">
        <h1 class="font-bold text-3xl opacity-70 text-white hover:text-secondary hover:opacity-90 transition-all">
            Phuong Pham
        </h1>
        <h2 class="font-bold text-lg opacity-45 text-white">
            - aka <span class="hover:text-secondary transition-all"> Julia </span>
        </h2>
        <p class="text-third">
            An aspiring &
        </p>
        <p  class="text-third">
            dedicated developer
        </p>
    </section>
    
    /*
    might need to adjust "Phuong Pham" to something else, like "Hi, I'm Phuong!", 
    hovering over Julia gives off a weird blue color, will fix soon. When adjusted to
    the suggested thing above, make sure to only highlight Phuong, well it does do that 
    but the colour it is giving is way darker than the current colour that you have, it's
    weird....
    */
  )
}
