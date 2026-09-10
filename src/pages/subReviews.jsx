import React from 'react'
import { Quote } from 'lucide-react'
import Reveal from '../components/reveal'

const reviews = [
  { quote: 'Accurate judgement begins where premature certainty ends' },
  { quote: 'Character carries what talent alone cannot.' },
  { quote: 'Good judgement is born from seeing reality more clearly.' },
  { quote: 'What we intend matters. What we embody matters more' },
  { quote: 'A society cannot long survive if it no longer trusts its ability to discern.' },
  { quote: 'Influence begins long before persuasion is noticed.' },
  { quote: 'What we reward, ignore, or tolerate reveals our judgement' },
  { quote: 'The distance between intention and outcome is often judgement.' },
  { quote: 'The most powerful influences rarely announce themselves.' },
  { quote: 'Understanding begins when we stop demanding that reality move at the speed of our discomfort' },
  { quote: 'What you repeatedly become will matter more than what you occasionally achieve.' },
  { quote: 'My work explores the journey from perception to discernment, from discernment to judgement, and from judgement to alignment with reality.' },
]

const QuoteCard = ({ quote }) => (
  <div className="mb-6 break-inside-avoid border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-lg lg:mb-8 lg:p-8">
    <Quote className="h-6 w-6 text-gray-300 lg:h-7 lg:w-7" fill="currentColor" strokeWidth={0} />
    <p className="mt-3 font-body text-sm italic leading-relaxed text-gray-800 sm:text-base lg:text-lg">
      {quote}
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
        <p className="mt-4 font-body text-sm italic text-gray-500 sm:text-base">
          Words from D.K. Arthur
        </p>
      </Reveal>

      <div className="mx-auto mt-16 max-w-5xl columns-1 text-left sm:columns-2 lg:mt-20 lg:max-w-6xl lg:columns-3 lg:gap-10 xl:max-w-7xl">
        {reviews.map((review, index) => (
          <Reveal key={index} delay={(index % 3) * 0.1} y={16}>
            <QuoteCard quote={review.quote} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SubReviews