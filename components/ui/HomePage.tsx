"use client"
import React, { useEffect, useState } from 'react'

export default function HomePage() {
     // state to manage display text
    const [displayText, setDisplayText] = useState<string>('');
     // state to manage current index
    const [currentIndex, setCurrentIndex] = useState<number>(0);
     // state to manage delete letter
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    
    const text = "Front End Developer";
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;

    useEffect(() => {
      let timer: NodeJS.Timeout;
      
      if (!isDeleting && currentIndex < text.length) {
        // Writing
        timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
      } else if (isDeleting && currentIndex > 0) {
        // delete
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, deletingSpeed);
      } else if (!isDeleting && currentIndex === text.length) {
        // await after finish writing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      } else if (isDeleting && currentIndex === 0) {
        // start anew after writing
        setIsDeleting(false);
      }
      
      return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, text]);
  return (
    <>
       
        <section className='py-40' id='home'>
  <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-top md:gap-8">
      <div >
        <div className="max-w-prose md:max-w-none ">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Hello! I'M  Kareem Ashraf
          </h2>

          <p className="mt-4 text-gray-700 font-bold">
           I'm &nbsp;{displayText}|
          </p>
          <h3 className='text-xl my-3.5 font-semibold text-gray-900 sm:text-3xl'>Summary</h3>
          <p className='mt-4 text-gray-700 font-bold'>Frontend Developer skilled in React.js, Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. Experienced in
building responsive and high-performance applications, improving load speed by 60% and achieving 95+
WCAG accessibility scores. Passionate about creating user-friendly experiences and collaborating in Agile
teams to deliver scalable and impactful digital solutions</p>
          <div className='flex gap-2.5 my-3'>
           <span className='w-5 h-5 rounded-full animate-bounce bg-gray-400   block'></span>
          <span className='w-5 h-5 rounded-full animate-bounce bg-gray-500  block'></span>
            <span className='w-5 h-5 rounded-full animate-bounce bg-gray-600   block'></span>
          <span className='w-5 h-5 rounded-full animate-bounce bg-gray-700  block'></span>
          </div>
        </div>
       
      </div>

      <div >
      

        <img
          src="/Portfolio/assets/home.png"
          className="rounded-full "
          alt="kareem"
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}
