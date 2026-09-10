import React from "react";
import latestReleaseOne from "../assets/latestReleaseOne.jpg";
import latestReleaseTwo from "../assets/latestReleaseTwo.jpg";
import latestReleaseThree from "../assets/latestReleaseThree.jpg";
import latestReleaseFour from "../assets/latestReleaseFour.jpg";
import bookOne from "../assets/bookOne.jpg";
import bookTwo from "../assets/bookTwo.jpg";
import bookThree from "../assets/bookThree.jpg";
import bookFour from "../assets/bookFour.jpg";
import bookFive from "../assets/bookFive.jpg";
import bookSix from "../assets/bookSix.jpg";
import bookSeven from "../assets/bookSeven.jpg";
import bookNine from "../assets/bookNine.jpg";
import Reveal from "../components/reveal";

const books = [
  {
    title: "Chaos Matter",
    description: "A foundational look at how clarity emerges out of confusion and disorder.",
    price: "4.00",
    image: bookOne,
    slug: "chaos-matter",
    amazonUrl: "https://www.amazon.com/Chaos-Matter-Understanding-Confusion-Structure-ebook/dp/B0H59X9LHJ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "Stabillity within Change",
    description: "How Structure Holds within Movement. A philisophical exploration of how stability emerges within a world that never stops changing. Challenging the assumption that instability is caused by changed itself, this book examines how perception, continuity, and discernmnet shape the experience of steadiness. It argues that true stability is not found in permanence, but in the capacity of structure to hold its coherence within movement.",
    price: "6.70",
    image: bookFive,
    slug: "stability-within-change",
    amazonUrl: "https://www.amazon.com/Stability-Within-Change-Emerges-Structure-ebook/dp/B0H5B7WM9P?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "Beauty: Psychology of Influence",
    description: "How Perception Shapes What is seen and Followed. An examination of beauty, perception, trust, and influence as parts of the a single process of recognition. Moving beyond appearance, the book explores how people come to be seen, valued, trusted, and followed. It preswnts influence not as persuasion or force, but as the natural outcome of clear and stable perception.",
    price: "6.66",
    image: bookSeven,
    slug: "psychology-of-influence",
    amazonUrl: "https://www.amazon.com/BEAUTY-Psychology-Influence-Perception-Structure-ebook/dp/B0H4DP6W9V?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "The Great Forest Kingdom",
    description: "A symbolic narrative exploring inner order, responsibility, and coherence through story rather than exposition — using metaphor to examine leadership, growth, and the work of inhabiting one's inner terrain.",
    price: "6.99",
    image: latestReleaseOne,
    slug: "the-great-forest-kingdom",
    amazonUrl: "https://www.amazon.com/GREAT-FOREST-KINGDOM-PHASES-BECOMING-ebook/dp/B0GXGM6G4M?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "The Making of The Exceptional Leader",
    description: "A study of leadership at its highest level, where responsibility cannot be delegated, certainty is rarely available, and character is tested without reward. This work explores the development of judgement, discernment, and steady responsibility, examining what distinguishes exceptional leadership when pressure increases and support becomes limited.",
    price: "9.30",
    image: latestReleaseTwo,
    slug: "the-making-of-the-exceptional-leader",
    amazonUrl: "https://www.amazon.com/Making-Exceptional-Leader-Responsibility-Leadership-ebook/dp/B0H5YN1VB4?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "The Zeitgeist Of This Era",
    description: "A diagnostic exploration of the emotional and perceptual conditions shaping modern life — examining how speed, visibility, and pressure quietly transform attention, judgment, and understanding.",
    price: "8.99",
    image: bookTwo,
    slug: "the-zeitgeist-of-this-era",
    amazonUrl: "https://www.amazon.com/ZEITGEIST-THIS-ERA-Understanding-Pressures-ebook/dp/B0H5TGRHLJ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "I Didnt Know This Was Also Love",
    description: "Reflections on the Love we Misname. A reflective exploration of how love is often recognised only after it has already been experienced. Moving through belonging, absence, longing, care, familiarity, and acceptance, the book examines how many forms of human connection are named too narrowly, and what becomes visible when experience is given more precise attention. ",
    price: "5.35",
    image: latestReleaseThree,
    slug: "i-didnt-know-this-was-also-love",
    amazonUrl: "https://www.amazon.com/Didnt-Know-This-Also-Love-ebook/dp/B0H5MG1Y1L?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "The Boy Who Threw Away Gold",
    description: "A reflective narrative on value and misrecognition — tracing how something genuine can be dismissed before it is fully understood, and what is revealed only after loss has already taken place.",
    price: "5.32",
    image: latestReleaseFour,
    slug: "the-boy-who-threw-away-gold",
    amazonUrl: "https://www.amazon.com/BOY-WHO-THREW-AWAY-GOLD-ebook/dp/B0H2F1LW7G?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "Foundations Of The Great Youth :Master Edition- Vol 1",
    description: "The first volume of the Master Edition, establishing the foundations of identity, self-awareness, discipline, and inner stability.It provides a framework for developing a secure sense of self amid pressure, distraction, and uncertainty.",
    price: "8.10",
    image: bookNine,
    slug: "foundations-of-the-great-youth-vol1",
    amazonUrl: "https://www.amazon.com/Foundations-Great-Youth-Developmental-Discipline-ebook/dp/B0GXVW4NZJ?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "Foundations Of The Great Youth: Master Edition -  Vol 2",
    description: "The second volume examines emotional wellbeign, healthy relationships, communication, influence, and leadership. It explores how personal stability extends outward into responsibility for others.",
    price: "8.10",
    image: bookSix,
    slug: "foundations-of-the-great-youth-vol2",
    amazonUrl: "https://www.amazon.com/Foundations-Great-Youth-Developmental-Relationships-ebook/dp/B0H1P96WQR?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "Foundations Of The Great Youth :Master Edition - Vol 3",
    description: "The concluding volume focuses on purpose, long-term direction, excellence, service, and contribution. It examines the movement from personal formation toward meaningful impact in the wider world.",
    price: "8.10",
    image: bookFour,
    slug: "foundations-of-the-great-youth-vol3",
    amazonUrl: "https://www.amazon.com/Foundations-Great-Youth-Developmental-Responsibility-ebook/dp/B0H1NVM186?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
  {
    title: "The Inner Compass",
    description: "A reflective narrative following the journey of Obrenpon, exploring inner alignment, discipline, and leadership as lived experience — how individuals remain steady under pressure and sustain integrity across changing environments.",
    price: "8.14",
    image: bookThree,
    slug: "the-inner-compass",
    amazonUrl: "https://www.amazon.com/INNER-COMPASS-Story-Obrenpon-ebook/dp/B0GZYFR56H?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.N1gC-gF67N2eCvoXpQsw2yrwhrl7CQRh9BSak60H1t6yWbaLVnIqEjuoXM8iSsz58cc9t4G01M5Ref8GAwJ4vyIvaENuF497iOO4uGwkxN0pH4QgydAmrB_2C9gXmuhbHq9_cNLTIRSbp7VgDRqz5MGzjyu-kZg03ZpZFwcSuLctYZn34JUXOpKQMv3WVLE1.WINLZk34OxNvIgDDDD1917HjOX-s_QEb536RVZk10RM&dib_tag=AUTHOR",
  },
];

const BookCard = ({ title, description, price, image, amazonUrl }) => (
  <div className="group mx-auto flex w-full max-w-xs flex-col text-center lg:max-w-sm">
    <div className="relative overflow-hidden shadow-2xl">
      <img src={image} alt={title} className="w-full" />

      <a
        href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-0 bottom-0 bg-white/85 py-2 text-sm text-gray-900 underline underline-offset-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:text-base"
      >
        Buy Now
      </a>
    </div>

    <p className="mt-4 font-serif text-base font-bold text-gray-900 lg:text-lg">
      {title}
    </p>

    <p className="mt-2 line-clamp-3 font-body text-xs italic leading-relaxed text-gray-500 lg:text-sm">
      {description}
    </p>

    <div className="mx-auto my-3 h-px w-5 bg-black" />
    <p className="text-sm text-gray-600 lg:text-base">${price}</p>
  </div>
);

const SubBooks = () => {
  return (
    <section className="mx-auto max-w-[1600px] bg-white px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pr-32 lg:px-20 lg:py-28 xl:px-28">
      <Reveal>
        <div className="mx-auto h-0.5 w-4 bg-gray-900" />
        <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em] lg:text-6xl">
          Books
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 md:grid-cols-3 lg:max-w-6xl lg:gap-x-12 lg:gap-y-20 xl:max-w-7xl">
        {books.map((book, index) => (
          <Reveal key={book.slug} delay={(index % 3) * 0.1} y={16}>
            <BookCard {...book} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SubBooks;