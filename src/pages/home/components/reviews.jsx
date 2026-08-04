import React from 'react'

const reviews = [
  {
    quote: "A gripping tale that lingers long after the last page. Daniel Arthur has crafted something rare—a story that feels both intimate and epic.",
    source: 'Seattle Daily',
  },
  {
    quote: "Arthur's prose is sharp, unsentimental, and quietly devastating. This is the kind of book you press into a friend's hands and say, 'You have to read this.'",
    source: 'The Washington Paper',
    showReadMore: true,
  },
  {
    quote: "A masterclass in pacing and voice. Arthur writes with the confidence of someone twice his experience, and it shows on every page.",
    source: 'T.O.M Magazine',
  },
]

const ReviewCard = ({ quote, source, showReadMore, offset }) => (
  <div className={`mx-auto max-w-xs text-center ${offset ? 'md:mt-14' : ''}`}>
    <p className="font-body text-base italic leading-relaxed text-gray-800">
      "{quote}"
    </p>
    <div className="mx-auto my-5 h-0.5 w-4 bg-gray-900" />
    <p className="font-serif text-base font-bold text-gray-900">{source}</p>

    {showReadMore && (
      
       <a href="/reviews"
        className="mt-6 inline-block text-sm font-body text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
      >
        Read More
      </a>
    )}
  </div>
)

const Reviews = () => {
  return (
    <section className="bg-[#e7e7e4] px-8 py-24 md:px-16 md:pr-32">
      <h2 className="font-serif text-4xl font-bold text-gray-900 text-center md:text-5xl">
        Reviews
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
        {reviews.map((review) => (
          <ReviewCard
            key={review.source}
            quote={review.quote}
            source={review.source}
            showReadMore={review.showReadMore}
            offset={review.showReadMore}
          />
        ))}
      </div>
    </section>
  )
}

export default Reviews