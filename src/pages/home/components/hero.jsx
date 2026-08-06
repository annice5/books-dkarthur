import React from 'react'
import hero from '../../../assets/hero.jpg';
import heroTwo from '../../../assets/heroTwo.jpg'

const Hero = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center md:justify-start bg-[#e7e7e4] px-6 py-16 pt-20 sm:px-8 md:px-16 md:pt-32">
        <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-7xl">
          D.K.

          <br />
          Arthur
        </h1>
        <p className="mt-6 font-body max-w-sm text-base leading-relaxed text-gray-700">
          Creator of FOGY Series, Foundations of the Great Youth-Master Edition Series
        </p>
        
         <a href="https://www.amazon.com/author/d.k.arthur"
          className="mt-8 w-fit text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors font-body"
        >
          D.K. Arthur Books
        </a>
      </div>

      <div className="relative flex items-start justify-center bg-white px-6 pt-20 sm:px-8 md:justify-end md:px-12 md:pt-32 md:pr-32">
        <div className="relative w-full max-w-[260px] sm:max-w-[320px]">
          <img
            src={heroTwo}
            alt="Daniel Arthur"
            className="h-[340px] w-full object-cover sm:h-[420px]"
          />
          <p className="mt-3 text-sm text-gray-700 font-body">
            Winner of the Golden Ink Award, 2035
          </p>
          <p className="font-signature absolute -bottom-7 right-8 -rotate-12 text-2xl text-gray-900 sm:right-14 sm:text-3xl">
            Arthur
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero