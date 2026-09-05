import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../../components/reveal";

const reviews = [
  {
    quote: "Closure should occur at the speed of reality, not at the speed of discomfort.",
    source: "D.K. Arthur",
  },
  {
    quote: "Greatness is not discovered in a moment. It is formed through foundations.",
    source: "D.K. Arthur",
    showReadMore: true,
  },
  {
    quote: "Every decision reveals the quality of the judgement behind it.",
    source: "D.K. Arthur",
  },
];

const ReviewCard = ({ quote, source, showReadMore, offset }) => (
  <div
    className={`mx-auto max-w-xs text-center lg:max-w-sm ${offset ? "md:mt-14" : ""}`}
  >
    <p className="font-body text-sm italic leading-relaxed text-gray-800 sm:text-base lg:text-lg">
      "{quote}"
    </p>
    <div className="mx-auto my-5 h-0.5 w-4 bg-gray-900" />
    <p className="font-serif text-base font-bold text-gray-900 lg:text-lg">
      {source}
    </p>

    {showReadMore && (
      <Link
        to="/reviews"
        className="mt-6 hidden text-sm font-body text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors lg:text-base md:inline-block"
      >
        Read More
      </Link>
    )}
  </div>
);

const Reviews = () => {
  return (
    <section className="mx-auto max-w-[1600px] bg-[#e7e7e4] px-6 py-16 sm:px-8 md:px-16 md:py-24 md:pr-32 lg:px-20 lg:py-28 xl:px-28">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold text-gray-900 text-center sm:text-4xl md:text-5xl lg:text-6xl">
          Reviews
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-12 lg:mt-20 lg:gap-16">
        {reviews.map((review, index) => (
          <Reveal key={index} delay={index * 0.12}>
            <ReviewCard
              quote={review.quote}
              source={review.source}
              showReadMore={review.showReadMore}
              offset={review.showReadMore}
            />
          </Reveal>
        ))}
      </div>

      {/* Mobile-only: one Read More link, sitting below all three reviews */}
      <div className="mt-10 text-center md:hidden">
        <Link
          to="/reviews"
          className="inline-block text-sm font-body text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default Reviews;