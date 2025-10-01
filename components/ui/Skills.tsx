import React from 'react'

export default function Skills() {
  return (
   
        <div  className=' mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8' id="skills">
            <h2 className='text-3xl font-bold'>
                Skills
            </h2>
       <div className='flex justify-start items-start gap-10  flex-wrap'>
          {/* Column 1 */}
        <div className="InfoSkills w-52 ">
          {[
            { name: "Html5/Css3", value: 95 },
            { name: "Javascript(ES6+)", value: 80 },
            { name: "TypeScript", value: 75 },
            { name: "Bootstrap", value: 75 },
            { name: "Tailwind Css", value: 75 },
          ].map((skill, index) => (
             <div key={index} className='my-3'>
    <p className="text-xs font-medium text-gray-500">{skill.name}</p>

    <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
      <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
    </div>
  </div>
          ))}
        </div>

      {/* Column 2*/}
        <div className="InfoSkills w-52 ">
      { [
            { name: "Shadcn/ui", value: 75 },
            { name: "React.js", value: 75 },
            { name: "Redux Toolkit", value: 75 },
            { name: "Form Hook", value: 75 },
            { name: "Zod Validation", value: 95 },
          ].map((skill, index) => (
             <div key={index} className='my-3'>
    <p className="text-xs font-medium text-gray-500">{skill.name}</p>

    <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
      <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
    </div>
  </div>
          ))}
        </div>
         {/* Column3*/}
        <div className="InfoSkills w-52 ">
      {
      [
           { name: "Axios", value: 75 },
           { name: "Vite", value: 75 },
           { name: "Git", value: 75 },
           { name: "GitHub", value: 75 },
           { name: "Figma", value: 75 },
          ] .map((skill, index) => (
             <div key={index} className='my-3'>
    <p className="text-xs font-medium text-gray-500">{skill.name}</p>

    <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
      <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
    </div>
  </div>
          ))}
        </div>
         {/* Column 4*/}
        <div className="InfoSkills w-52 ">
      {
     
     [
          { name: "Material Ui", value: 75 },
          { name: "React Bootstrap", value: 75 },
          { name: "Next.js", value: 80 },
          { name: "Restful Apis", value: 75 },
          ].map((skill, index) => (
             <div key={index} className='my-3'>
    <p className="text-xs font-medium text-gray-500">{skill.name}</p>

    <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
      <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
    </div>
  </div>
          ))}
        </div>
        </div>
      <button
      className=" bg-black text-white rounded-2xl p-3.5 my-3">
        <a
          href="/KAREEM-ASHRAF-CV.pdf"
          download="Kareem Ashraf Frontend Developer.pdf"
          className="flex items-center gap-2 DownloadLink"
        >
          Download CV
         
        </a>
      </button>
  </div>
  )
}
