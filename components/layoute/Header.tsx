"use client"
import React from 'react'
import { useState } from 'react'
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
<header className="backdrop-blur-lg bg-white/15  shadow-md h-auto fixed  left-0 right-0 top-0   z-50 
rounded-br-full
rounded-bl-full

">
  <div className="mx-auto
  relative
  flex  justify-center flex-wrap   h-16 max-w-screen items-center  gap-40 
  md:flex-row
  md:justify-center
  md:items-center
  md:static
  md:gap-48 ">
    <a className="block border border-black rounded-full" href="#">
      <img src="/assets/sidebar.jpg" alt="kareem" loading="lazy" className=' w-12 h-12 rounded-full'/>
      
    </a>

    <span className='block  md:hidden text-2xl text-white cursor-pointer'
        onClick={toggleMenu}><i className="fa-solid fa-bars"></i></span>
      <nav  className=
      {`transition-all duration-300 ease-in-out
      backdrop-blur-lg bg-white/15
       ${isOpen?" absolute  top-16 right-14":"absolute  top-16 -right-48"}
         md:static
          md:bg-transparent
        `} >
       
        <ul className="flex flex-col gap-5 justify-center items-center w-32 
        md:flex-row 
        md:justify-center  md:items-center  md:gap-6 md:w-full
         text-sm">
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
  )}
