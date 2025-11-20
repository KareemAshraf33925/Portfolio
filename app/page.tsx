"use client"
import About from "@/components/ui/About";
import HomePage from"../components/ui/HomePage";
import Skills from "@/components/ui/Skills";
import Works from "@/components/ui/Works";
import ContactUs from "@/components/ui/ContactUs";
import Footer from "@/components/layoute/Footer";
import { useState } from "react";
export default function Home() {
const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <HomePage/>
    <About/>
    <Skills/>
    <Works/>
    <ContactUs/>
    <Footer/>
    <div className="fixed top-36  -left-1  flex flex-col justify-center
     shadow-md h-52 items-center gap-4
    w-12 
    cursor-pointer
    ">
      <span className="block text-2xl font-bold text-white
       rounded-tr-2xl 
      backdrop-blur-lg bg-white/15 w-full text-center
      h-10
      "
      onClick={toggleMenu}>+</span>
        <div className={`flex justify-center items-center flex-col gap-5 my-3
        transition-all duration-300 ease-in-out h-36
        relative
          ${isOpen ?"-top-4 left-0":"-top-4 -left-28"}
        backdrop-blur-lg bg-white/15 w-full rounded-br-2xl
        md:gap-6`}>
          <a
            className="block rounded-md  bg-gray-100
             px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://www.facebook.com/profile.php?id=100072562880983&locale=ar_AR"
          >
         <i className="fa-brands fa-facebook text-xl"></i>
          </a>

          <a
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://github.com/KareemAshraf33925"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>
           <a
            className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://www.linkedin.com/in/kareem-ashraf-816768355"
          >
         <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
        </div>

       
      </div>
    </>
  );
}
