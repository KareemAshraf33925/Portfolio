"use client";
import Image from "next/image";
import React from "react";
type projectsProps = {
  demo: string;
  live: string;
  image: string;
  title: string;
}[];
export default function Works() {
  // all projects in array
  const projects: projectsProps = [
    {
      demo: "https://github.com/KareemAshraf33925/Dashboard_Sales",
      live: "https://dashboard-sales-ashy.vercel.app/en/dashboard",
      image: "/assets/dashboard.jpg",
      title: "Salesdashboard",
    },
    {
      demo: "https://github.com/KareemAshraf33925/Booking_Doctor",
      live: "https://booking-doctor-two.vercel.app/",
      image: "/assets/Appontment.jpg",
      title: "Appointment-app",
    },
    {
      demo: "https://github.com/KareemAshraf33925/RestaFoods",
      live: "https://resta-foods.vercel.app/",
      image: "/assets/Resturant.jpg",
      title: "Resturant",
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
