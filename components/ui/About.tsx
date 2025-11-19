import React from 'react'
import Image from 'next/image'
export default function About() {
   
  return (
    <>
    <section id='about'  className='bg-black text-white h-dvh  max-w-screen  px-4 py-10 sm:px-6 lg:px-8
    flex justify-center items-center'>
 
    <div className="flex justify-center items-center gap-10  flex-wrap">
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold my-5 text-white sm:text-3xl">
         EXPERIENCE
          </h2>

          <p className="my-3 text-white font-bold">
           Frontend Developer Intern – Armed Forces IT Department (Nov 2024 – Feb 2025)
          </p>
          <ul className='list-disc my-3'>
            <li className='my-1'> Improved application performance by 60% using code splitting, lazy loading, and CDN optimizations,
             reducing load time to 1.5s.</li>
            <li className='my-1'> Increased user conversion rate by 25% through improved UI/UX design.</li>
            <li className='my-1'> Increased user conversion rate by 25% through improved UI/UX design.</li>
            <li className='my-1'> Reduced bugs by 70% through debugging and testing.</li>
          </ul>
             <ul className="flex flex-row flex-wrap gap-5 list-disc my-3">
                    <li className='mx-1'>Birthday:<span className="text-md">1 march 1999</span></li>
                    <li className='mx-1'>Phone:<span>+201117068105</span></li>
                    <li className='mx-1'>City:<span>Cairo,Egypt</span></li>
                </ul>
                <ul className="flex flex-row flex-wrap gap-5 list-disc my-3">
                    <li className='mx-1'>Age:<span>25 years</span></li>
                    <li className='mx-1'>Degree:<span>Bachelor's</span></li>
                    <li className='mx-1'>Email:<span>ashrafkareem005@gmail.com </span></li>
                </ul>
        </div>
      </div>

      <div>
        <Image
          src="/assets/About.png"
          className="rounded-full"
          alt="about"
          width={300}
          height={300}
        />
      </div>
    </div>
 
</section>

    </>
  )
}
