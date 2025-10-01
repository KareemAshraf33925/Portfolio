import React from 'react'

export default function Header() {
  return (
    <div>
<header className="bg-white dark:bg-gray-900 shadow-md pb-28 pt-2.5 md:py-2.5 h-auto fixed to-0% right-0 left-0 z-50">
  <div className="mx-auto flex flex-col  md:flex-row h-16 max-w-screen-xl items-center gap-8 px-4  sm:px-6 lg:px-8">
    <a className="block border-2 border-black rounded-full" href="#">
      <img src="/Portfolio/assets/sidebar.jpg" alt="kareem" loading="lazy" className=' w-12 h-12 rounded-full'/>
      
    </a>

    <div className="flex flex-1 flex-col items-center justify-center md:justify-between md:flex-row">
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

      <div className="flex items-center gap-4">
        <div className="flex gap-10 my-3 md:gap-6">
          <a
            className="block rounded-md  bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://www.facebook.com/profile.php?id=100072562880983&locale=ar_AR"
          >
         <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://github.com/KareemAshraf33925"
          >
            <i className="fa-brands fa-github"></i>
          </a>
           <a
            className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://www.linkedin.com/in/kareem-ashraf-816768355"
          >
         <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

       
      </div>
    </div>
  </div>
</header>

    </div>
  )
}
