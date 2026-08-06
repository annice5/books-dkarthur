import React from 'react'
import hero from '../assets/hero.jpg'

const About = () => {
  return (
    <section className="bg-white px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pr-32">
      <div className="mx-auto h-0.5 w-4 bg-gray-900" />
      <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em]">
        About
      </h2>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 text-left sm:mt-16 md:grid-cols-2 md:gap-16">
        <img
          src={hero}
          alt="Daniel Arthur"
          className="h-[320px] w-full object-cover sm:h-[420px] md:h-full"
        />

        <div>
          <p className="font-serif text-base font-bold italic leading-relaxed text-gray-900 sm:text-lg">
            About the Author
          </p>

          <p className="mt-6 font-body text-sm leading-relaxed text-gray-700 sm:text-base">
            D. K. Arthur is a writer and thinker whose work lies at the intersection of philosophy, psychology, and lived experience. Through both nonfiction and narrative works, he explores how clarity, perception, discernment, judgment, influence, and human development take shape under real-world conditions.
            <br /><br />
            His writing develops a unified body of work concerned with how reality is seen, recognised, interpreted, and followed. Rather than treating subjects such as identity, behaviour, leadership, influence, and personal development as separate disciplines, he approaches them as interconnected structures within human understanding.
          </p>

          <p className="mt-6 font-body text-sm leading-relaxed text-gray-700 sm:text-base">
            Arthur is the author of the Structure of Clarity Series and Foundations of the Great Youth - Master Edition Series, alongside a growing body of philosophical, developmental, and narrative works. Together, these writings examine how people form understanding, navigate complexity, make judgments, respond to influence, and develop alignment with reality across different conditions and stages of life.
            <br /><br />
            Readers may begin with Chaos Matter, continue with Stability Within Change, and then Beauty: Psychology of Influence as an entry point into the broader framework. From there, the work expands into themes of identity, formation, judgment, leadership, communication, influence, and human development.
          </p>

          <p className="font-signature mt-4 text-right text-2xl text-gray-900 sm:text-3xl">
            Arthur
          </p>
        </div>
      </div>
    </section>
  )
}

export default About