import "../../styles/work.css";
import React from 'react'

export default function Works() {
        // all projects in array
    const projects=[
        {
        demo:"https://github.com/KareemAshraf33925/Appointments-doctors-app",
        live:"https://kareemashraf33925.github.io/Appointments-doctors-app/",
        image:"/Portfolio/assets/doctors-appointment-app.png",
        title:"Appointment-app",
       },
       { demo:"https://github.com/KareemAshraf33925/Resturant-app",
        live:"https://kareemashraf33925.github.io/Resturant-app/",
        image:"/Portfolio/assets/resturant.png",
        title:"Resturant",
       },
       {
        demo:"https://github.com/KareemAshraf33925/shopingHub",
        live:"https://kareemashraf33925.github.io/shopingHub/",
        image:"/Portfolio/assets/shopingHub.png",
        title:"ShopingHub"
        },
        {
            demo:"https://github.com/KareemAshraf33925/Co-Shope",
            live:"https://kareemashraf33925.github.io/Co-Shope/index.html",
            image:"/Portfolio/assets/coShop.png",
            title:'CoShop'
            },
            {
                demo:"https://github.com/KareemAshraf33925/Todo-App",
                live:"https://kareemashraf33925.github.io/Todo-App/",
                image:"/Portfolio/assets/TodoApp.png",
                title:"Todoapp"
                },
                {
                    demo:"https://github.com/KareemAshraf33925/crudApp",
                    live:"https://kareemashraf33925.github.io/crudApp/",
                    image:"/Portfolio/assets/Crudapp.png",
                    title:"crudApp"
                    },

]
  return (
    <div  className=' mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8' id="works">
    <h2 className='text-3xl font-bold'>
             Projects
            </h2>
   <section className="work ">
        <div className="workContent">
        
        <div className="content">
        <div className="projects my-10">
        {projects.map((project,index)=>(
            <div className="project" key={index}>
  <img   src={project.image} alt={project.title} className="Perfumestore"/>
            <div className="Demolive">
            <button>
            <a href={project.demo}>Demo</a>    
            </button>
            <button>
            <a href={project.live}>Live</a>  
            </button>
            </div>
            </div>

        ))}
        <a href="https://github.com/KareemAshraf33925?tab=repositories" className="github">Visit Github To Watch More Projects</a>
        </div>
        </div>
        </div>
    </section>
    </div>
  )
}
