
import About from "@/components/ui/About";
import HomePage from"../components/ui/HomePage";
import Skills from "@/components/ui/Skills";
import Works from "@/components/ui/Works";
import ContactUs from "@/components/ui/ContactUs";
import Footer from "@/components/layoute/Footer";
export default function Home() {
  return (
    <>
    <HomePage/>
    <About/>
    <Skills/>
    <Works/>
    <ContactUs/>
    <Footer/>
    <div className="fixed top-36  left-0 backdrop-blur-lg bg-white/15 flex justify-center rounded-tr-2xl
    rounded-br-2xl shadow-md h-52 items-center gap-4
    w-12 
    ">
        <div className="flex justify-center items-center flex-col gap-10 my-3 md:gap-6">
          <a
            className="block rounded-md  bg-gray-100
             px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://www.facebook.com/profile.php?id=100072562880983&locale=ar_AR"
          >
         <i className="fa-brands fa-facebook text-xl"></i>
          </a>

          <a
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://github.com/KareemAshraf33925"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>
           <a
            className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block "
            href="https://www.linkedin.com/in/kareem-ashraf-816768355"
          >
         <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
        </div>

       
      </div>
    </>
  );
}
