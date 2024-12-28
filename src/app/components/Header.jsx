import React from 'react'

export default function Header() {
  return (
    <section class="w-fit text-white">
        <div class="flex flex-wrap font-bold text-3xl">
            <h1 class="opacity-70">
                Hi, I'm 
            </h1>
            <h1 class="opacity-70 hover:text-secondary hover:opacity-100 transition-all">
                &nbsp;Phuong
            </h1>
        </div>
        <div class="flex flex-wrap font-bold text-lg">
            <h2 class="opacity-45">
                - aka 
            </h2>
            <h2 class="opacity-45 hover:text-secondary hover:opacity-100 transition-all">
                &nbsp;Julia
            </h2>
        </div>
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
