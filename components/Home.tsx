"use client"
import ImgHome from"../assets/home.png";
import "../styles/homepage.css"
import React, { useState, useEffect } from 'react';
//type of pointer
type Pointer={
  x:number;
  y:number;
}
const Home=()=>{
  // state to manage display text
    const [displayText, setDisplayText] = useState<string>('');
     // state to manage current index
    const [currentIndex, setCurrentIndex] = useState<number>(0);
     // state to manage delete letter
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    //  // state to manage pointer in screen
    const[pointer,setpointer]=useState<Pointer>({x:0,y:0})
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
    return(<>
    
    <div className="home" onPointerMove={e=>{
        setpointer({
          x:e.clientX,
          y:e.clientY
        })}
      }>
      <div className="pointer" 
      style={{
        position:"fixed",
        transform:`translate(${pointer.x}px,${pointer.y}px)`,
        top:-10,
        left:-10,
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        backgroundColor:"white",
        pointerEvents:"none",
        zIndex:999
      }}
      ></div>
        <div className="wrap-info">
            <div className="info">
                <h1 className="capitalize text-5xl h1"> Kareem Ashraf</h1>
                    <p className="capitalize text-2xl   para">I'm &nbsp;{displayText}|</p>
            </div>
            <img src={ImgHome.src} alt="Kareem" className="Imgkareem" />
        </div>
    </div>
    </>)
}
export default Home;