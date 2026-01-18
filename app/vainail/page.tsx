import Image from "next/image";
import React from "react";
type projectsProps = {
  demo: string;
  live: string;
  image: string;
  title: string;
}[];
export default function Vainail() {
  // all projects in array
  const projects: projectsProps = [
    {
      demo: "https://github.com/KareemAshraf33925/Amputee-Initiative",
      live: "https://kareemashraf33925.github.io/Amputee-Initiative/",
      image: "/assets/apmutte.jpg",
      title: "Amputee-Initiative",
    },

    {
      demo: "https://github.com/KareemAshraf33925/Co-Shope",
      live: "https://kareemashraf33925.github.io/Co-Shope/index.html",
      image: "/assets/coShop.png",
      title: "CoShop",
    },

    {
      demo: "https://github.com/KareemAshraf33925/crudApp",
      live: "https://kareemashraf33925.github.io/crudApp/",
      image: "/assets/Crudapp.png",
      title: "crudApp",
    },
  ];
  return (
    <>
      <section
        className=" max-w-screen bg-black  
   flex justify-center items-center  flex-col gap-5"
        id="works"
        style={{ padding: "100px 0" }}
      >
        <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-row justify-center">
              <div className="flex flex-col justify-center items-center gap-5  rounded-xl h-56 w-72 md:w-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                />
                <div
                  className="flex flex-row justify-center items-center gap-10
         w-full"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    className="w-28 h-8 bg-white text-black
            font-semibold rounded-lg text-center cursor-pointer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="w-28 h-8 bg-white text-black
            font-semibold rounded-lg text-center cursor-pointer"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
