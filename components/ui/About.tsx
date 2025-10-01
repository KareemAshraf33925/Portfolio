import React from 'react'

export default function About() {
   
  return (
    <>
    <section  id='about'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
         EXPERIENCE
          </h2>

          <p className="mt-4 text-gray-700 font-bold">
           Frontend Developer Intern – Armed Forces IT Department (Nov 2024 – Feb 2025)
          </p>
          <ul className='list-disc'>
            <li> Improved application performance by 60% using code splitting, lazy loading, and CDN optimizations,
             reducing load time to 1.5s.</li>
            <li> Increased user conversion rate by 25% through improved UI/UX design.</li>
            <li> Increased user conversion rate by 25% through improved UI/UX design.</li>
            <li> Reduced bugs by 70% through debugging and testing.</li>
          </ul>
             <ul className="flex flex-row flex-wrap gap-5 list-disc my-3">
                    <li>Birthday:<span className="text-md">1 march 1999</span></li>
                    <li>Phone:<span>+201117068105</span></li>
                    <li>City:<span>Cairo,Egypt</span></li>
                </ul>
                <ul className="flex flex-row flex-wrap gap-5 list-disc my-3">
                    <li>Age:<span>25 years</span></li>
                    <li>Degree:<span>Bachelor's</span></li>
                    <li>Email:<span>ashrafkareem005@gmail.com </span></li>
                </ul>
        </div>
      </div>

      <div>
        <img
          src="/Portfolio/assets/About.png"
          className="rounded"
          alt="about"
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}
