import React from 'react'
import latestReleaseOne from '../assets/latestReleaseOne.jpg'
import latestReleaseTwo from '../assets/latestReleaseTwo.jpg'
import latestReleaseThree from '../assets/latestReleaseThree.jpg'
import latestReleaseFour from '../assets/latestReleaseFour.jpg'
import bookOne from '../assets/bookOne.jpg'
import bookTwo from '../assets/bookTwo.jpg'
import bookThree from '../assets/bookThree.jpg'
import bookFour from '../assets/bookFour.jpg'
import bookFive from '../assets/bookFive.jpg'
import bookSix from '../assets/bookSix.jpg'
import bookseven from '../assets/bookseven.jpg'
import bookNine from '../assets/bookNine.jpg'

const books = [
  { title: 'Chaos Matter', price: '4.00', image: bookOne, slug: 'chaos-matter', amazonUrl: "https://www.amazon.com/Chaos-Matter-Understanding-Confusion-Structure-ebook/dp/B0H59X9LHJ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
  { title: 'Stabillity within Change', price: '6.70', image: bookFive, slug: 'stability-within-change', amazonUrl: 'https://www.amazon.com/Stability-Within-Change-Emerges-Structure-ebook/dp/B0H5B7WM9P?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR' },
  { title: 'Beauty: Psychology of Influence', price: '6.66', image: bookseven, slug: 'psychology-of-influence', amazonUrl: 'https://www.amazon.com/BEAUTY-Psychology-Influence-Perception-Structure-ebook/dp/B0H4DP6W9V?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR' },
  { title: 'The Great Forest Kingdom', price: '6.99', image: latestReleaseOne, slug: 'the-great-forest-kingdom', amazonUrl: "https://www.amazon.com/GREAT-FOREST-KINGDOM-PHASES-BECOMING-ebook/dp/B0GXGM6G4M?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
  { title: 'The Making of The Exceptional Leader', price: '9.30', image: latestReleaseTwo, slug: 'the-making-of-the-exceptional-leader', amazonUrl: "https://www.amazon.com/Making-Exceptional-Leader-Responsibility-Leadership-ebook/dp/B0H5YN1VB4?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
  { title: 'The Zeitgeist Of This Era', price: '8.99', image: bookTwo, slug: 'the-zeitgeist-of-this-era', amazonUrl: 'https://www.amazon.com/ZEITGEIST-THIS-ERA-Understanding-Pressures-ebook/dp/B0H5TGRHLJ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR' },
  { title: 'I Didnt Know This Was Also Love', price: '5.35', image: latestReleaseThree, slug: 'i-didnt-know-this-was-also-love', amazonUrl: 'https://www.amazon.com/Didnt-Know-This-Also-Love-ebook/dp/B0H5MG1Y1L?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR' },
  { title: 'The Boy Who Threw Away Gold', price: '5.32', image: latestReleaseFour, slug: 'the-boy-who-threw-away-gold', amazonUrl: "https://www.amazon.com/BOY-WHO-THREW-AWAY-GOLD-ebook/dp/B0H2F1LW7G?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
  { title: 'Foundations Of The Great Youth :Master Edition- Vol 1', price: '8.10', image: bookNine, slug: 'foundations-of-the-great-youth-vol1', amazonUrl: 'https://www.amazon.com/Foundations-Great-Youth-Developmental-Discipline-ebook/dp/B0GXVW4NZJ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR' },
  { title: 'Foundations Of The Great Youth: Master Edition -  Vol 2', price: '8.10', image: bookSix, slug: 'foundations-of-the-great-youth-vol2', amazonUrl: "https://www.amazon.com/Foundations-Great-Youth-Developmental-Relationships-ebook/dp/B0H1P96WQR?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
  { title: 'Foundations Of The Great Youth :Master Edition - Vol 3', price: '8.10', image: bookFour, slug: 'foundations-of-the-great-youth-vol3', amazonUrl: "https://www.amazon.com/Foundations-Great-Youth-Developmental-Responsibility-ebook/dp/B0H1NVM186?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
  { title: 'The Inner Compass', price: '8.14', image: bookThree, slug: 'the-inner-compass', amazonUrl: "https://www.amazon.com/INNER-COMPASS-Story-Obrenpon-ebook/dp/B0GZYFR56H?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR" },
]

const BookCard = ({ title, price, image, amazonUrl }) => (
  <div className="mx-auto w-full max-w-xs text-center">
    <div className="group relative overflow-hidden shadow-2xl">
      <img src={image} alt={title} className="w-full" />

      
       <a href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-0 bottom-0 bg-white/85 py-2 text-sm text-gray-900 underline underline-offset-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Quick View
      </a>
    </div>

    <p className="mt-4 text-sm text-black font-body">{title}</p>
    <div className="mx-auto my-1.5 h-px w-5 bg-black" />
    <p className="text-sm text-gray-600">${price}</p>
  </div>
)

const SubBooks = () => {
  return (
    <section className="bg-white px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pr-32">
      <div className="mx-auto h-0.5 w-4 bg-gray-900" />
      <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em]">
        Books
      </h2>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 md:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.slug} {...book} />
        ))}
      </div>
    </section>
  )
}

export default SubBooks