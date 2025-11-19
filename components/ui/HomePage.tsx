"use client"
import React, { useEffect, useState } from 'react'
import {GridScan} from "../../components/GridScan";
import TextPressure from "../../components/TextPressure"
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
    <div style={{ width: '100%', height: '100vh', position: 'relative' ,background:'black'}}>

<GridScan

  sensitivity={0.55}

  lineThickness={1}

  linesColor="white"

  gridScale={0.1}

  scanColor="#FF9FFC"

  scanOpacity={0.4}

  enablePost

  bloomIntensity={0.6}

  chromaticAberration={0.002}

  noiseIntensity={0.01}

/>
  <section className='pt-40 bg-transparent absolute top-1/4 left-50%' id='home'>
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
       
          
            <div className="max-w-prose md:max-w-none flex flex-col justify-center  items-center gap-5  ">
            <div>

<TextPressure

  text="Hello! I'M  Kareem Ashraf"

  flex={true}

  alpha={false}

  stroke={false}

  width={true}

  weight={true}

  italic={true}

  textColor="#ffffff"

  strokeColor="#ff0000"

  minFontSize={40}

/>

</div>
    
              <p className="mt-4 text-white font-bold">
               I'm &nbsp;{displayText}|
              </p>
              <h3 className='text-xl my-3.5 font-semibold text-white sm:text-3xl'>Summary</h3>
              <p className='mt-4 text-white font-bold text-center w-3/5'>Frontend Developer skilled in React.js, Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. Experienced in
    building responsive and high-performance applications, improving load speed by 60% and achieving 95+
    WCAG accessibility scores. Passionate about creating user-friendly experiences and collaborating in Agile
    teams to deliver scalable and impactful digital solutions</p>
              <div className='flex gap-2.5 my-5'>
               <span className='w-3 h-5 rounded-full animate-bounce bg-purple-500   block'></span>
              <span className='w-3 h-6 rounded-full animate-bounce bg-purple-600  block'></span>
                <span className='w-3 h-7 rounded-full animate-bounce bg-purple-700    block'></span>
                <span className='w-3 h-7 rounded-full animate-bounce bg-purple-700   block'></span>
                <span className='w-3 h-6 rounded-full animate-bounce bg-purple-600    block'></span>
              <span className='w-3 h-5 rounded-full animate-bounce bg-purple-500   block'></span>
              </div>
            </div>
           
         
    
          
       
      </div>
    </section>
</div>
    </>
  )
}
