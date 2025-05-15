"use client"
import { Progress } from "@/components/ui/progress";
import DownloadIcon from '@mui/icons-material/Download';
import "../styles/skills.css";
import { useState } from "react";
type Pointer={
  x:number;
  y:number;
}
const Skills = () => {
  const[pointer,setpointer]=useState<Pointer>({x:0,y:0})
  return (
    <section className="skills w-full h-full p-4"
    onPointerMove={e=>{
      setpointer({
        x:e.clientX,
        y:e.clientY
      })}
    }
    >
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
      <h2 className="text-4xl font-bold capitalize mb-8">Skills</h2>
      
      <div className="content ">
        {/* Column 1 */}
        <div className="InfoSkills w-52 ">
          {[
            { name: "Html5/Css3", value: 95 },
            { name: "Javascript(ES6+)", value: 80 },
            { name: "TypeScript", value: 75 },
            { name: "Bootstrap", value: 75 },
            { name: "Tailwind Css", value: 75 },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <Progress value={skill.value} className="mt-3 h-2" />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="InfoSkills w-52 ">
          {[
            { name: "Shadcn/ui", value: 75 },
            { name: "React.js", value: 75 },
            { name: "Redux Toolkit", value: 75 },
            { name: "Form Hook", value: 75 },
            { name: "Zod Validation", value: 95 },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <Progress value={skill.value} className="mt-3 h-2" />
            </div>
          ))}
        </div>
         {/* Column 3 */}
         <div className="InfoSkills w-52 ">
          {[
           { name: "Axios", value: 75 },
           { name: "Vite", value: 75 },
           { name: "Git", value: 75 },
           { name: "GitHub", value: 75 },
           { name: "Figma", value: 75 },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <Progress value={skill.value} className="mt-3 h-2" />
            </div>
          ))}
        </div>
         {/* Column 4 */}
         <div className="InfoSkills w-52 ">
          {[
          { name: "Material Ui", value: 75 },
          { name: "React Bootstrap", value: 75 },
          { name: "Next.js", value: 80 },
          { name: "Restful Apis", value: 75 },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <Progress value={skill.value} className="mt-3 h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-start download">
        <a
          href="/Kareem-Ashraf-Front-End-Developer.pdf"
          download="Kareem Ashraf Frontend Developer.pdf"
          className="flex items-center gap-2 DownloadLink"
        >
          Download CV
          <DownloadIcon fontSize="small" />
        </a>
      </div>
    </section>
  );
};

export default Skills;