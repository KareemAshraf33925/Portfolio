"use client"
import Image from 'next/image' 
import React from 'react'
type projectsProps={
    demo:string;
    live:string;
    image:string;
    title:string;
}[]
export default function Works() {
        // all projects in array
    const projects:projectsProps=[
      {
        demo:"https://github.com/KareemAshraf33925/salesdashboard",
        live:"https://salesdashboard-eta.vercel.app/en/dashboard",
        image:"/assets/dashboard.png",
        title:"Salesdashboard",
       },
        {
        demo:"https://github.com/KareemAshraf33925/Appointments-doctors-app",
        live:"https://kareemashraf33925.github.io/Appointments-doctors-app/",
        image:"/assets/doctors-appointment-app.png",
        title:"Appointment-app",
       },
       { demo:"https://github.com/KareemAshraf33925/Resturant-app",
        live:"https://kareemashraf33925.github.io/Resturant-app/",
        image:"/assets/resturant.png",
        title:"Resturant",
       },
       {
        demo:"https://github.com/KareemAshraf33925/shopingHub",
        live:"https://kareemashraf33925.github.io/shopingHub/",
        image:"/assets/shopingHub.png",
        title:"ShopingHub"
        },
        {
            demo:"https://github.com/KareemAshraf33925/Co-Shope",
            live:"https://kareemashraf33925.github.io/Co-Shope/index.html",
            image:"/assets/coShop.png",
            title:'CoShop'
            },
            {
                demo:"https://github.com/KareemAshraf33925/Todo-App",
                live:"https://kareemashraf33925.github.io/Todo-App/",
                image:"/assets/TodoApp.png",
                title:"Todoapp"
                },
                {
                    demo:"https://github.com/KareemAshraf33925/crudApp",
                    live:"https://kareemashraf33925.github.io/crudApp/",
                    image:"/assets/Crudapp.png",
                    title:"crudApp"
                    },

]
  return (
   <>
   <section className=' max-w-screen bg-black 
   flex justify-center items-center  flex-col gap-5' id="works"  >
    <h2 className='text-white font-bold text-2xl '>Projects</h2>
    <div className='flex flex-row justify-center items-center gap-5 flex-wrap'>
    {projects.map((project,index)=>(
        <div key={index} className='flex flex-row justify-center'>
          <div className='flex flex-col justify-center items-center gap-5  rounded-xl h-56 w-72'>
          <Image src={project.image} alt={project.title} width={400} height={400}
          />
          <div className='flex flex-row justify-center items-center gap-10
         w-full'>
            <a href={project.demo} target='_blank' className='w-28 h-8 bg-white text-black
            font-semibold rounded-lg text-center cursor-pointer'>Demo</a>
            <a href={project.live} target='_blank'className='w-28 h-8 bg-white text-black
            font-semibold rounded-lg text-center cursor-pointer'>Live</a>
          </div>
          </div>
          </div>
          ))}
    </div>
   </section>
   
   </>
  )
}
