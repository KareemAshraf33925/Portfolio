"use client"
import"../styles/about.css";
import Image from "next/image";
import Imgabout from"../assets/About.png";
import { useState } from "react";
//type of pointer in screen
type Pointer={
    x:number;
    y:number;
  }
const About=()=>{
  //state manage value of pointer
    const[pointer,setpointer]=useState<Pointer>({x:0,y:0})
    return(<>
    <section className="about h-full"
    // action of pointer
    onPointerMove={e=>{
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
        <div className="AboutContent h-full">
       
        <div className="AboutInfo">
            <h2 className="capitalize text-4xl">About Me</h2>
            <h4 className="text-2xl">Hello!  I'M Kareem Ashraf.</h4>
            <p>Frontend developer with hands-on experience in building responsive web applications using modern
                technologies such as React.js, Next.js, and Tailwind CSS. Passionate about creating intuitive user
                interfaces and enhancing user experiences. Eager to contribute to innovative projects while
                continuously improving technical skills.
            </p>
            <article className="MoreInformation">
                <ul className="items">
                    <li>Birthday:<span className="text-md">1 march 1999</span></li>
                    <li>Phone:<span>+201117068105</span></li>
                    <li>City:<span>Cairo,Egypt</span></li>
                </ul>
                <ul className="items">
                    <li>Age:<span>25 years</span></li>
                    <li>Degree:<span>Bachelor's</span></li>
                    <li>Email:<span>ashrafkareem005@gmail.com </span></li>
                </ul>
            </article>

        </div>
        <Image
        className="rounded-md img w-80 h-80 img"
        src={Imgabout}
        alt="design"
        priority
        />
        </div>
    </section>
        </>)
}
export default About;