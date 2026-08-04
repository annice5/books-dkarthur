import React from 'react'
import hero from '../../../assets/hero.jpg';
import heroTwo from '../../../assets/heroTwo.jpg'

const Hero = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
  <div className="flex flex-col justify-center md:justify-start bg-[#e7e7e4] px-8 py-16 md:px-16 pt-32">
    <h1 className="font-serif text-6xl font-bold leading-tight text-gray-900 md:text-7xl">
      Daniel
      <br />
      Arthur
    </h1>
    <p className="mt-6 font-body max-w-sm text-base leading-relaxed text-gray-700">
      Author of the best-selling books The Great Forest Kingdom, The Making of the Exceptional Leader, I didnt know this was also Love and many more
    </p>
    <a href='https://www.amazon.com/author/d.k.arthur' className="mt-8 w-fit text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors font-body">
      Buy Daniel's Books
    </a>
  </div>

  <div className="relative flex items-start justify-end bg-white px-8 pt-32 md:px-12 md:pr-32">
    <div className="relative w-full max-w-[320px]">
      <img
        src={heroTwo}
        alt="Daniel Arthur"
        className="h-[420px] w-[320px] object-cover"
      />
      <p className="mt-3 text-sm text-gray-700 font-body">Winner of the Golden Ink Award, 2035</p>
      <p className="font-signature absolute -bottom-7 right-14 -rotate-12 text-3xl text-gray-900">
        Arthur
      </p>
    </div>
  </div>
</section>
  )
}

export default Hero