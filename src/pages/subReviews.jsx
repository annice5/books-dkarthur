import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/reveal'

const reviews = [
  { source: 'D.K Arthur', quote: 'Accurate judgement begins where premature certainty ends' },
  { source: 'D.K Arthur', quote: 'Character carries what talent alone cannot.' },
  { source: 'D.K Arthur', quote: 'Good judgement is born from seeing reality more clearly.' },
  { source: 'D.K Arthur', quote: 'What we intend matters. What we embody matters more' },
  { source: 'D.K Arthur', quote: 'A society cannot long survive if it no longer trusts its ability to discern.' },
  { source: 'D.K Arthur', quote: 'Influence begins long before persuasion is noticed.' },
  { source: 'D.K Arthur', quote: 'What we reward, ignore, or tolerate reveals our judgement' },
  { source: 'D.K Arthur', quote: 'The distance between intention and outcome is often judgement.' },
  { source: 'D.K Arthur', quote: 'The most powerful influences rarely announce themselves.' },
  { source: 'D.K Arthur', quote: 'Understanding begins when we stop demanding that reality move at the speed of our discomfort' },
  { source: 'D.K Arthur', quote: 'What you repeatedly become will matter more than what you occasionally achieve.' },
  { source: 'D.K Arthur', quote: 'My work explores the journey from perception to discernment, from discernment to judgement, and from judgement to alignment with reality.' },
]

const AUTOPLAY_DELAY = 5000

const variants = {
  enter: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
}

// Picks the shortest visual path around the loop, so jumping from the
// last slide to the first (or vice versa) animates the same direction
// as a regular "next"/"previous" would.
const getDotDirection = (from, to, length) => {
  const diff = to - from
  if (diff === 0) return 1
  return Math.abs(diff) * 2 > length ? -Math.sign(diff) : Math.sign(diff)
}

const ReviewsCarousel = () => {
  const [[index, direction], setIndex] = useState([0, 1])

  const paginate = useCallback((newDirection) => {
    setIndex(([prevIndex]) => {
      const next = (prevIndex + newDirection + reviews.length) % reviews.length
      return [next, newDirection]
    })
  }, [])

  const goToIndex = useCallback(
    (i) => {
      setIndex(([prevIndex]) => [i, getDotDirection(prevIndex, i, reviews.length)])
    },
    []
  )

  useEffect(() => {
    const timer = setInterval(() => paginate(1), AUTOPLAY_DELAY)
    return () => clearInterval(timer)
  }, [paginate])

  const current = reviews[index]

  return (
    <div className="relative mx-auto mt-16 flex max-w-xl items-center justify-center gap-4 lg:mt-20 lg:max-w-2xl lg:gap-8">
      <button
        type="button"
        onClick={() => paginate(-1)}
        aria-label="Previous review"
        className="shrink-0 text-gray-400 transition-colors hover:text-gray-900"
      >
        <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
      </button>

      <div className="relative h-56 w-full overflow-hidden sm:h-48 lg:h-44">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            drag="x"
            dragConstraints={{ right: 0, left: 0}}
            dragElastic={0.6}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -60) paginate(1)
              else if (offset.x > 60) paginate(-1)
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className="mx-auto h-0.5 w-4 bg-gray-900" />
            <p className="mt-3 font-serif text-base font-bold text-gray-900 lg:text-lg">
              {current.source}
            </p>
            <p className="mt-6 max-w-md font-body text-sm italic leading-relaxed text-gray-800 sm:text-base lg:text-lg">
              "{current.quote}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => paginate(1)}
        aria-label="Next review"
        className="shrink-0 text-gray-400 transition-colors hover:text-gray-900"
      >
        <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
      </button>

      <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToIndex(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const SubReviews = () => {
  return (
    <section className="mx-auto max-w-[1600px] bg-white px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pr-32 lg:px-20 lg:py-28 xl:px-28">
      <Reveal>
        <div className="mx-auto h-0.5 w-4 bg-gray-900" />
        <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em] lg:text-6xl">
          Reviews
        </h2>
      </Reveal>

      <ReviewsCarousel />
    </section>
  )
}

export default SubReviews