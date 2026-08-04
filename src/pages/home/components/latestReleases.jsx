import React from 'react'
import latestReleaseOne from '../../../assets/latestReleaseOne.jpg'
import latestReleaseTwo from '../../../assets/latestReleaseTwo.jpg'
import latestReleaseThree from '../../../assets/latestReleaseThree.jpg'

const BookCard = ({ src, alt, title, price, href, shadow = 'shadow-2xl' }) => (
  <div className="group w-full max-w-sm">
    <img src={src} alt={alt} className={`w-full ${shadow}`} />

    <div className="relative mt-6 h-16 text-center">
  {/* Title + price — visible by default, fades out on hover */}
  <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
    <h3 className="font-serif text-lg font-bold text-gray-900">{title}</h3>
    <div className="my-3 mx-auto h-0.5 w-8 bg-gray-900" />
    <p className="text-gray-950">${price}</p>
  </div>

  
    <a href={href}
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
)

const LatestReleases = () => {
  return (
    <section className="bg-white px-8 py-24 md:px-16 md:pr-32">
      <h2 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">
        Daniel Arthur's Latest Releases
      </h2>

      <div className="mt-20 ml-8 grid grid-cols-1 gap-16 md:ml-16 md:grid-cols-2 md:gap-24">
        <BookCard
          src={latestReleaseOne}
          alt="The Great Forest Kingdom"
          title="The Great Forest Kigndom"
          price="6.99"
          href="https://www.amazon.com/author/d.k.arthur"
        />

        <div className="md:mt-24">
          <BookCard
            src={latestReleaseTwo}
            alt="The Making of the Exceptional Leader"
            title="The Making of the Exceptional Leader"
            price="9.30"
            href="https://www.amazon.com/author/d.k.arthur"
            shadow="shadow-xl"
          />
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <BookCard
          src={latestReleaseThree}
          alt="I Didnt Know This Was Also Love"
          title="I Didnt Know This Was Also Love"
          price="5.35"
          href="https://www.amazon.com/author/d.k.arthur"
          shadow="shadow-xl"
        />

        <div>
          <p className="font-serif text-lg italic leading-relaxed text-gray-800">
            D. K. Arthur is a writer and thinker whose work lies at the intersection of philosophy, psychology, and lived experience. Through both nonfiction and narrative works, he explores how clarity, perception, discernment, judgment, influence, and human development take shape under real-world conditions.

His writing develops a unified body of work concerned with how reality is seen, recognised, interpreted, and followed. Rather than treating subjects such as identity, behaviour, leadership, influence, and personal development as separate disciplines, he approaches them as interconnected structures within human understanding.
          </p>

          
           <a href="https://www.amazon.com/author/d.k.arthur"
            className="mt-6 inline-block font-body text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            More Books
          </a>
        </div>
      </div>
    </section>
  )
}

export default LatestReleases