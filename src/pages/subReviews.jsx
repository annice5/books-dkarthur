import React from 'react'
import Reveal from '../components/reveal'

const reviews = [
  {
    source: 'Louisiana Reviews',
    quote: "A striking voice—confident, precise, and quietly powerful. Arthur writes like someone who has actually lived the questions he's asking.",
  },
  {
    source: 'Reading Time',
    quote: "Arthur writes with rare clarity about complicated things. Every chapter earns its place; nothing here feels padded or rushed.",
  },
  {
    source: 'Line Magazine',
    quote: "One of the most thoughtful voices writing today. This is the kind of work that rewards a second, slower read.",
  },
  {
    source: 'James Belle | Author',
    quote: "I don't say this lightly: Arthur's work changed how I think about my own. A generous, demanding, necessary read.",
  },
  {
    source: 'The Boston Independent Review of Books',
    quote: "Sharp without being cold, and honest without being bleak. Arthur has a rare gift for making difficult ideas feel human.",
  },
  {
    source: 'Authors for Authors',
    quote: "A writer's writer. Arthur pays close attention to language and it shows—every sentence is doing real work.",
  },
]

const ReviewCard = ({ source, quote }) => (
  <div className="mx-auto max-w-xs text-center lg:max-w-sm">
    <div className="mx-auto h-0.5 w-4 bg-gray-900" />
    <p className="mt-3 font-serif text-base font-bold text-gray-900 lg:text-lg">
      {source}
    </p>
    <p className="mt-6 font-body text-sm italic leading-relaxed text-gray-800 sm:text-base lg:text-lg">
      "{quote}"
    </p>
  </div>
)

const SubReviews = () => {
  return (
    <section className="mx-auto max-w-[1600px] bg-white px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pr-32 lg:px-20 lg:py-28 xl:px-28">
      <Reveal>
        <div className="mx-auto h-0.5 w-4 bg-gray-900" />
        <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em] lg:text-6xl">
          Reviews
        </h2>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 md:grid-cols-3 lg:max-w-6xl lg:mt-20 lg:gap-x-12 lg:gap-y-20 xl:max-w-7xl">
        {reviews.map((review, index) => (
          <Reveal key={index} delay={(index % 3) * 0.1} y={16}>
            <ReviewCard source={review.source} quote={review.quote} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SubReviews