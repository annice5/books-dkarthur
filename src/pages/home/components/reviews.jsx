import React from "react";
import Reveal from "../../../components/reveal";

const reviews = [
  {
    quote:
      "A gripping tale that lingers long after the last page. Daniel Arthur has crafted something rare—a story that feels both intimate and epic.",
    source: "D.K. Arthur",
  },
  {
    quote:
      "Arthur's prose is sharp, unsentimental, and quietly devastating. This is the kind of book you press into a friend's hands and say, 'You have to read this.'",
    source: "D.K. Arthur",
    showReadMore: true,
  },
  {
    quote:
      "A masterclass in pacing and voice. Arthur writes with the confidence of someone twice his experience, and it shows on every page.",
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
      <a
        href="/reviews"
        className="mt-6 inline-block text-sm font-body text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors lg:text-base"
      >
        Read More
      </a>
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
    </section>
  );
};

export default Reviews;
