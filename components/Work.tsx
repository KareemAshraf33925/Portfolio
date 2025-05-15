import"../styles/work.css";
import Image from "next/image";
import WorkImg from"../assets/work.png"
import Perfumestore from"../assets/perfumstore.png"
import ShopingHub from"../assets/shopingHub.png"
import CoShop from"../assets/coShop.png"
import Todoapp from"../assets/TodoApp.png"
import crudApp from"../assets/Crudapp.png"

const Work=()=>{
    // all projects in array
    const projects=[{
        demo:"https://github.com/KareemAshraf33925/Perfumestore",
        live:"https://kareemashraf33925.github.io/Perfumestore/",
        image:Perfumestore,
        title:"Perfumestore"
       },
       {
        demo:"https://github.com/KareemAshraf33925/shopingHub",
        live:"https://kareemashraf33925.github.io/shopingHub/",
        image:ShopingHub,
        title:"ShopingHub"
        },
        {
            demo:"https://github.com/KareemAshraf33925/Co-Shope",
            live:"https://kareemashraf33925.github.io/Co-Shope/index.html",
            image:CoShop,
            title:'CoShop'
            },
            {
                demo:"https://github.com/KareemAshraf33925/Todo-App",
                live:"https://kareemashraf33925.github.io/Todo-App/",
                image:Todoapp,
                title:"Todoapp"
                },
                {
                    demo:"https://github.com/KareemAshraf33925/crudApp",
                    live:"https://kareemashraf33925.github.io/crudApp/",
                    image:crudApp,
                    title:"crudApp"
                    },

]
    return(<>
    
    <section className="work">
        <div className="workContent">
        
        <div className="content">
        <Image src={WorkImg} alt="workimg" className="imgWork"/>
        <div className="projects">
        {projects.map((project,index)=>(
            <div className="project" key={index}>
            <Image src={project.image} alt={project.title} className="Perfumestore"/>
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
    </>)
}
export default Work;