import React from 'react'
import hero from '../../../assets/hero.jpg';
import heroTwo from '../../../assets/heroTwo.jpg'
import Reveal from '../../../components/reveal'

const Hero = () => {
  return (
    <section className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 md:grid-cols-2">
      <Reveal className="order-2 flex flex-col justify-center bg-[#e7e7e4] px-6 py-16 pt-20 sm:px-8 md:order-1 md:justify-start md:px-16 md:pt-32 lg:px-20 xl:px-28">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
           Welcome to The official website of
        </p>

        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-7xl lg:text-8xl">
          D.K.
          <br />
          Arthur
        </h1>

        <p className="mt-6 font-body max-w-sm text-base leading-relaxed text-gray-700 lg:max-w-md lg:text-lg">
          D.K. Arthur is an author and thinker exploring clarity, perception, judgment, and human development through the Structure of Clarity Series, the Foundations of the Great Youth — Master Edition Series, and a growing body of nonfiction and narrative works.
        </p>

        <a
          href="https://www.amazon.com/author/d.k.arthur"
          className="mt-8 w-fit text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors font-body lg:text-base"
        >
          D.K. Arthur Books
        </a>
      </Reveal>

      <Reveal delay={0.15} className="order-1 relative flex items-start justify-center bg-[#e7e7e4] px-6 pt-20 sm:px-8 md:order-2 md:justify-end md:px-12 md:pt-32 md:pr-32 lg:pr-24 xl:pr-32">
        <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px] xl:max-w-[440px]">
          <img
            src={heroTwo}
            alt="Daniel Arthur"
            className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px] xl:h-[560px]"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 92%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 92%)',
            }}
          />

          <p className="font-signature absolute -bottom-12 right-8 -rotate-12 text-2xl text-gray-900 sm:right-14 sm:text-3xl lg:text-4xl">
            Arthur
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero