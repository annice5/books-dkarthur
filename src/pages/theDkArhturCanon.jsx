import React from 'react'
import Reveal from '../components/reveal'

const publishedWorks = [
  {
    category: 'Structure of Clarity Series',
    description: 'Foundational works exploring how clarity emerges, how stability is maintained, and how influence shapes human understanding.',
    works: ['Chaos Matter', 'Stability Within Change', 'Beauty: Psychology of Influence'],
  },
  {
    category: 'Foundations of the Great Youth — Master Edition Series',
    description: 'A developmental framework examining identity, discipline, emotional stability, leadership, excellence, and meaningful contribution.',
    works: ['Orientation & Inner Foundations', 'Wellbeing, Relationships & Leadership', 'Vision, Excellence & Contribution'],
  },
  {
    category: 'Perception & Judgment',
    description: 'Works exploring how reality is interpreted, how judgment develops, and how understanding shapes human experience.',
    works: ['The Zeitgeist of This Era', "I Didn't Know This Was Also Love"],
  },
  {
    category: 'Leadership',
    description: null,
    works: ['The Making of the Exceptional Leader'],
  },
  {
    category: 'Narrative Works',
    description: 'Stories exploring identity, perception, influence, understanding, and personal development through narrative form.',
    works: ['The Inner Compass', 'The Great Forest Kingdom', 'The Boy Who Threw Away Gold'],
  },
]

const inDevelopmentWorks = [
  {
    category: 'Foundations of Clarity',
    description: 'The foundational framework from which the wider canon emerges, exploring the conditions under which clarity, perception, understanding, and judgment develop.',
    works: ['Foundations of Clarity'],
  },
  {
    category: 'Disclosure, Discernment & Judgment',
    description: 'Works exploring how reality is recognised, interpreted, discerned, and brought into alignment with accurate judgment.',
    works: ['Half a Mo'],
  },
  {
    category: 'Perception & Judgment',
    description: 'Investigations into speed, attention, assumptions, continuity, and the unseen forces that shape understanding and judgment.',
    works: [
      'The Quiet Cost of Hurry',
      'Another Law at Work: Within Judgment',
      'Another Law at Work: Beyond Intention',
      'When Judgment Is No Longer Trusted',
      'What Changes When Everything Continues',
    ],
  },
  {
    category: 'Communication & Misunderstanding',
    description: 'Works examining why understanding breaks down and how meaning diverges between people.',
    works: ['The Misunderstanding', 'Not Everyone Knows What You Know'],
  },
  {
    category: 'Behaviour & Influence',
    description: 'Studies of conformity, social pressure, influence, collective behaviour, and the forces that shape human action.',
    works: ['The Fourth Crowd', 'The Little Tiny Webs We Make', 'When Conscience Meets Majority Pressure'],
  },
  {
    category: 'Leadership',
    description: null,
    works: ['The Cost of Leadership'],
  },
  {
    category: 'Limit & Existential Edge',
    description: 'Reflections on human limitation, endurance, meaning, and the realities encountered at the edge of certainty and control.',
    works: ['When It Is Not Enough'],
  },
  {
    category: 'Spiritual Formation',
    description: null,
    works: ['The Quiet Presence'],
  },
  {
    category: 'Narrative Works',
    description: null,
    works: ['The Unseen Self'],
  },
]

const SeriesCard = ({ category, description, works, muted }) => (
  <div>
    <h3 className={`font-serif text-base font-bold lg:text-lg ${muted ? 'text-gray-500' : 'text-gray-900'}`}>
      {category}
    </h3>
    {description && (
      <p className={`mt-1.5 font-body text-xs italic leading-relaxed lg:text-sm ${muted ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    )}
    <ul className="mt-3 space-y-1">
      {works.map((work) => (
        <li
          key={work}
          className={`font-body text-sm lg:text-base ${muted ? 'text-gray-400' : 'text-gray-800'}`}
        >
          {work}
        </li>
      ))}
    </ul>
  </div>
)

const SectionLabel = ({ children, muted }) => (
  <div
    className={`border-b pb-2 font-body text-xs uppercase tracking-[0.2em] lg:text-sm ${
      muted ? 'border-gray-100 text-gray-300' : 'border-gray-200 text-gray-500'
    }`}
  >
    {children}
  </div>
)

const TheDkArthurCanon = () => {
  return (
    <section className="mx-auto max-w-[1600px] bg-white px-6 py-16 sm:px-8 md:px-16 md:py-24 md:pr-32 lg:px-20 lg:py-28 xl:px-28">
      <Reveal className="text-center">
        <div className="mx-auto h-0.5 w-4 bg-gray-900" />
        <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em] lg:text-6xl">
          The D.K. Arthur Canon
        </h2>

        <p className="mx-auto mt-8 max-w-2xl font-body text-sm leading-relaxed text-gray-700 sm:text-base lg:max-w-3xl lg:text-lg">
          This body of work forms a unified system exploring clarity, perception, discernment, judgment, leadership, influence, formation, and human development.
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-gray-700 sm:text-base lg:max-w-3xl lg:text-lg">
          Each work approaches these themes from a different position within the canon. Some establish foundational frameworks for understanding reality and human perception. Others explore how understanding develops under pressure, influence, uncertainty, leadership, and lived experience. Narrative works embody these same realities through story, character, and symbolic exploration.
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-gray-700 sm:text-base lg:max-w-3xl lg:text-lg">
          Together, these works examine how people perceive reality, form understanding, exercise judgment, navigate influence, and develop alignment throughout life.
        </p>
      </Reveal>

      {/* Published Works */}
      <div className="mx-auto mt-20 max-w-5xl text-left lg:mt-24 lg:max-w-6xl">
        <Reveal>
          <SectionLabel>Published Works</SectionLabel>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-12 lg:gap-16">
          {publishedWorks.map((series, index) => (
            <Reveal key={series.category} delay={(index % 2) * 0.1} y={16}>
              <SeriesCard {...series} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Works in Development */}
      <div className="mx-auto mt-20 max-w-5xl text-left lg:mt-24 lg:max-w-6xl">
        <Reveal>
          <SectionLabel muted>Works in Development</SectionLabel>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-12 lg:gap-16">
          {inDevelopmentWorks.map((series, index) => (
            <Reveal key={series.category} delay={(index % 2) * 0.1} y={16}>
              <SeriesCard {...series} muted />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheDkArthurCanon