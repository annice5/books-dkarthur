import React from "react";
import { Link } from "react-router-dom";
import latestReleaseOne from "../../../assets/latestReleaseOne.jpg";
import latestReleaseTwo from "../../../assets/latestReleaseTwo.jpg";
import latestReleaseThree from "../../../assets/latestReleaseThree.jpg";
import Reveal from "../../../components/reveal";

const BookCard = ({ src, alt, title, price, href, shadow = "shadow-2xl" }) => (
  <div className="group mx-auto w-full max-w-sm">
    <img src={src} alt={alt} className={`w-full ${shadow}`} />

    <div className="relative mt-6 h-16 text-center">
      <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-serif text-base font-bold text-gray-900 sm:text-lg">
          {title}
        </h3>
        <div className="my-3 mx-auto h-0.5 w-8 bg-gray-900" />
        <p className="text-gray-950">${price}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center border border-gray-900 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="font-serif text-sm font-bold italic text-gray-900">
          Buy Now
        </span>
      </a>
    </div>
  </div>
);

const LatestReleases = () => {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 md:px-16 md:py-24 md:pr-32">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          D.K. Arthur's Latest Releases
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 sm:ml-4 md:ml-16 md:mt-20 md:grid-cols-2 md:gap-24">
        <Reveal delay={0.1}>
          <BookCard
            src={latestReleaseOne}
            alt="The Great Forest Kingdom"
            title="The Great Forest Kigndom"
            price="6.99"
            href="https://www.amazon.com/author/d.k.arthur"
          />
        </Reveal>

        <Reveal delay={0.2} className="md:mt-24">
          <BookCard
            src={latestReleaseTwo}
            alt="The Making of the Exceptional Leader"
            title="The Making of the Exceptional Leader"
            price="9.30"
            href="https://www.amazon.com/author/d.k.arthur"
            shadow="shadow-xl"
          />
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 items-center gap-12 md:mt-24 md:grid-cols-2">
        <Reveal>
          <BookCard
            src={latestReleaseThree}
            alt="I Didnt Know This Was Also Love"
            title="I Didnt Know This Was Also Love"
            price="5.35"
            href="https://www.amazon.com/author/d.k.arthur"
            shadow="shadow-xl"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-serif text-base italic leading-relaxed text-gray-800 sm:text-lg">
            D. K. Arthur is a writer and thinker whose work lives at the
            intersection of philosophy, psychology, and lived experience —
            exploring how people find clarity, judgment, and direction in real
            life.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-block font-body text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            About D.K. Arthur
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default LatestReleases;
