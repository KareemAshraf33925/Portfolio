import React from 'react'

export default function Header() {
  return (
    <>
<header className="backdrop-blur-lg bg-white/15  shadow-md h-auto fixed  w-1/2 top-5  left-1/4 z-50
rounded-full p-10">
  <div className="mx-auto flex flex-col justify-center flex-wrap md:flex-row  h-16 max-w-screen-xl items-center gap-48 ">
    <a className="block border border-black rounded-full" href="#">
      <img src="/assets/sidebar.jpg" alt="kareem" loading="lazy" className=' w-12 h-12 rounded-full'/>
      
    </a>

    
      <nav aria-label="Global" className="md:block">
        <ul className="flex  items-center  gap-6 text-sm">
          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-bold"
              href="#home"
            >
            Home
            </a>
          </li>

          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-bold"
              href="#about"
            >
             About
            </a>
          </li>

          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-bold"
              href="#skills"
            >
            Skills
            </a>
          </li>

          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-bold"
              href="#works"
            >
           Works
            </a>
          </li>
           <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-bold"
              href="#contactus"
            >
         Contact Us
            </a>
          </li>

        </ul>
      </nav>

     
   
  </div>
</header>

    </>
  )
}
