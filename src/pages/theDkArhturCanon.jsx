import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from '../components/reveal'

const readerPaths = [
  {
    question: 'I Want to Understand Myself Better',
    title: 'Foundations of the Great Youth',
    blurb: 'A developmental framework exploring identity, responsibility, discipline, wellbeing, leadership, purpose, and contribution.',
    recommended: 'Recommended for readers interested in personal growth, development, and self-leadership.',
    target: 'foundations-of-the-great-youth',
  },
  {
    question: 'I Want to Understand Love and Human Connection',
    title: "I Didn't Know This Was Also Love",
    blurb: "A reflective exploration of belonging, care, longing, familiarity, absence, and recognition. The book examines how many forms of love are understood only after they have already been experienced.",
    recommended: 'Recommended for readers interested in relationships, human connection, and self-understanding.',
    target: 'i-didnt-know-this-was-also-love',
  },
  {
    question: 'I Want to Understand Influence, Trust, and Perception',
    title: 'Beauty: Psychology of Influence',
    blurb: 'An examination of beauty, perception, recognition, trust, and influence. The book explores how people become seen, valued, trusted, and followed.',
    recommended: 'Recommended for readers interested in influence, leadership, communication, and perception.',
    target: 'beauty-psychology-of-influence',
  },
  {
    question: 'I Want to Understand Leadership',
    title: 'The Making of the Exceptional Leader',
    blurb: 'A study of leadership where certainty is rare, responsibility cannot be delegated, and judgment must operate under pressure.',
    recommended: 'Recommended for leaders, managers, mentors, and decision makers.',
    target: 'the-making-of-the-exceptional-leader',
  },
  {
    question: 'I Want to Understand How Clarity Forms',
    title: 'Chaos Matter',
    blurb: 'An exploration of how confusion forms when what is present has not yet taken shape, and how understanding emerges through recognition and structure.',
    recommended: 'Recommended for readers interested in thought, perception, and understanding itself.',
    target: 'chaos-matter',
  },
]

const profiles = [
  {
    slug: 'chaos-matter',
    title: 'Chaos Matter',
    subtitle: 'Understanding the Order Hidden in Confusion',
    hook: 'What if confusion is not the absence of clarity, but clarity that has not yet taken shape?',
    overview: 'Chaos Matter explores the conditions under which understanding first emerges. Rather than treating confusion as disorder, it examines how thoughts, perceptions, and recognitions gradually organise themselves into forms that can be understood and followed.',
    why: 'Many discussions focus on solutions, certainty, and conclusions. Chaos Matter begins earlier, exploring how understanding itself develops before it becomes visible.',
    audience: ['Readers interested in perception and understanding', 'Thinkers navigating uncertainty', 'Leaders dealing with complexity', 'Anyone seeking deeper clarity without premature conclusions'],
    themes: ['Clarity', 'Formation', 'Recognition', 'Perception', 'Structure', 'Understanding'],
    related: ['Stability Within Change', 'Beauty: Psychology of Influence', 'Foundations of Clarity'],
    threadText: 'Explore how structure remains coherent within movement.',
    threadTarget: 'stability-within-change',
  },
  {
    slug: 'stability-within-change',
    title: 'Stability Within Change',
    subtitle: 'How Structure Holds Within Movement',
    hook: 'What if stability is not the absence of change, but the ability to remain coherent within it?',
    overview: 'Stability Within Change examines how continuity persists in a world that never stops moving. Challenging the assumption that instability is created by change itself, the book explores how perception, discernment, and relation generate stability under dynamic conditions.',
    why: 'People often pursue certainty when they are really seeking stability. This work explores the deeper structures that allow steadiness to exist even when certainty remains unavailable.',
    audience: ['Readers navigating transition and uncertainty', 'Leaders responsible for long-term direction', 'Those interested in discernment and resilience', 'Students of perception and human development'],
    themes: ['Stability', 'Continuity', 'Change', 'Discernment', 'Coherence', 'Structure'],
    related: ['Chaos Matter', 'Beauty', 'The Zeitgeist of This Era'],
    threadText: 'Explore how perception becomes recognition, trust, and influence.',
    threadTarget: 'beauty-psychology-of-influence',
  },
  {
    slug: 'beauty-psychology-of-influence',
    title: 'Beauty: Psychology of Influence',
    subtitle: 'How Perception Shapes What Is Seen and Followed',
    hook: 'People are not followed because they are visible. They are followed because they are recognised.',
    overview: 'Beauty explores the relationship between perception, recognition, trust, influence, and leadership. Moving beyond appearance, it examines how people become visible, valued, trusted, and followed.',
    why: 'Most discussions of influence begin with persuasion. This book begins earlier, exploring how recognition itself becomes possible.',
    audience: ['Leaders and communicators', 'Educators and mentors', 'Creators and entrepreneurs', 'Anyone interested in trust, influence, and perception'],
    themes: ['Beauty', 'Recognition', 'Trust', 'Influence', 'Leadership', 'Perception'],
    related: ['Stability Within Change', 'The Little Tiny Webs We Make', 'The Making of the Exceptional Leader'],
    threadText: 'Explore how influence operates under responsibility.',
    threadTarget: 'the-making-of-the-exceptional-leader',
  },
  {
    slug: 'foundations-of-the-great-youth',
    title: 'Foundations of the Great Youth — Master Edition',
    subtitle: 'A Developmental Framework for Identity, Responsibility, and Direction',
    hook: 'Growth is not becoming someone else. It is becoming more accurately yourself.',
    overview: 'Foundations of the Great Youth provides a structured framework for identity formation, responsibility, emotional stability, leadership, excellence, and contribution.',
    why: 'Young people face increasing complexity but are often given fragmented guidance. This work provides an integrated developmental structure that can be revisited across different stages of life.',
    audience: ['Young people', 'Parents', 'Educators', 'Mentors', 'Youth leaders'],
    themes: ['Identity', 'Responsibility', 'Discipline', 'Leadership', 'Purpose', 'Contribution'],
    related: ['The Making of the Exceptional Leader', 'The Inner Compass', 'Foundations of Clarity'],
    threadText: 'Explore leadership where responsibility cannot be deferred.',
    threadTarget: 'the-making-of-the-exceptional-leader',
  },
  {
    slug: 'the-making-of-the-exceptional-leader',
    title: 'The Making of the Exceptional Leader',
    subtitle: 'Leadership Where Responsibility Cannot Be Shared',
    hook: 'Leadership becomes most visible when certainty disappears.',
    overview: 'A study of leadership at its highest levels, where judgment must operate without certainty, consequences cannot be avoided, and responsibility cannot be delegated.',
    why: 'Many leadership books focus on techniques. This book focuses on responsibility itself, examining what remains when performance, popularity, and affirmation no longer guide decision-making.',
    audience: ['Leaders', 'Executives', 'Founders', 'Mentors', 'Decision-makers'],
    themes: ['Leadership', 'Responsibility', 'Judgment', 'Character', 'Discernment', 'Pressure'],
    related: ['The Cost of Leadership', 'Beauty', 'Foundations of the Great Youth'],
    threadText: 'Explore recognition, belonging, and the human dimensions of understanding.',
    threadTarget: 'i-didnt-know-this-was-also-love',
  },
  {
    slug: 'i-didnt-know-this-was-also-love',
    title: "I Didn't Know This Was Also Love",
    subtitle: 'Reflections on the Love We Misname',
    hook: 'Not everything we call love is the same. Not everything that is love is recognised immediately.',
    overview: 'A reflective exploration of belonging, care, familiarity, loss, longing, recognition, and acceptance. The book examines how many experiences become understandable only after they have already been lived.',
    why: 'Many forms of human connection are named too narrowly. This work explores what becomes visible when familiar experiences are given more precise attention.',
    audience: ['Reflective readers', 'Readers interested in relationships and belonging', 'Those exploring identity and connection', 'Anyone who has struggled to name what they have experienced'],
    themes: ['Love', 'Belonging', 'Recognition', 'Care', 'Understanding', 'Human Connection'],
    related: ['Beauty', 'The Misunderstanding', 'The Quiet Presence'],
    threadText: 'Explore how perception shapes understanding more broadly.',
    threadTarget: 'the-zeitgeist-of-this-era',
  },
  {
    slug: 'the-zeitgeist-of-this-era',
    title: 'The Zeitgeist of This Era',
    subtitle: 'The Conditions Shaping Modern Perception',
    hook: 'Every age teaches people how to see without telling them it is teaching them.',
    overview: 'A diagnostic examination of the emotional, cultural, and perceptual conditions shaping contemporary life.',
    why: 'Many influences are felt long before they are consciously recognised. This work examines the pressures, assumptions, and environments quietly shaping attention and judgment.',
    audience: ['Thinkers', 'Leaders', 'Educators', 'Cultural observers', 'Readers interested in modern society'],
    themes: ['Modernity', 'Attention', 'Culture', 'Pressure', 'Judgment', 'Perception'],
    related: ['The Quiet Cost of Hurry', 'When Judgment Is No Longer Trusted', 'Stability Within Change'],
    threadText: 'Explore how speed changes attention, creativity, and judgment.',
    threadTarget: 'the-quiet-cost-of-hurry',
  },
  {
    slug: 'the-great-forest-kingdom',
    title: 'The Great Forest Kingdom',
    subtitle: 'Order, Responsibility, and Leadership Through Story',
    hook: 'Some truths are easier to recognise when they are encountered rather than explained.',
    overview: 'A symbolic narrative exploring leadership, responsibility, order, and coherence through metaphor and story. The kingdom becomes a lens through which deeper realities about human development and authority become visible.',
    why: 'Certain forms of understanding emerge more naturally through narrative than through direct instruction.',
    audience: ['Readers of allegory', 'Leaders and mentors', 'Young adults', 'Reflective readers'],
    themes: ['Leadership', 'Responsibility', 'Order', 'Formation', 'Wisdom', 'Coherence'],
    related: ['The Inner Compass', 'The Boy Who Threw Away Gold', 'The Making of the Exceptional Leader'],
    threadText: 'Explore recognition, value, and what is noticed too late.',
    threadTarget: 'the-boy-who-threw-away-gold',
  },
  {
    slug: 'the-quiet-cost-of-hurry',
    title: 'The Quiet Cost of Hurry',
    subtitle: 'On Speed, Attention, and What Is Lost',
    hook: 'Not everything lost is taken away. Some things disappear because there was never time to notice them.',
    overview: 'An examination of how urgency reshapes attention, creativity, judgment, and perception. The book explores what gradually erodes when speed becomes the dominant condition of life.',
    why: 'Modern life rewards speed while often ignoring its costs. This work investigates how haste changes not only what people do, but how they see.',
    audience: ['Professionals living under constant pressure', 'Leaders and decision-makers', 'Reflective readers', 'Anyone feeling shaped by urgency'],
    themes: ['Attention', 'Hurry', 'Creativity', 'Judgment', 'Time', 'Perception'],
    related: ['The Zeitgeist of This Era', 'What Changes When Everything Continues', 'Stability Within Change'],
    threadText: 'Explore the wider forces silently shaping modern perception.',
    threadTarget: 'the-zeitgeist-of-this-era',
  },
  {
    slug: 'another-law-at-work-within-judgment',
    title: 'Another Law at Work: Within Judgment',
    subtitle: 'How Judgment Forms Before Awareness',
    hook: 'People often believe they judge consciously. Most judgment begins before they realise it has begun.',
    overview: 'An examination of how familiarity, repetition, speed, and prior experience shape judgment before conscious decision-making occurs.',
    why: 'Many explanations of judgment focus on decisions. This work examines what happens before decisions become visible.',
    audience: ['Leaders', 'Educators', 'Mentors', 'Readers interested in psychology and perception'],
    themes: ['Judgment', 'Familiarity', 'Perception', 'Decision-making', 'Interpretation', 'Discernment'],
    related: ['Another Law at Work: Beyond Intention', 'When Judgment Is No Longer Trusted', 'Half a Mo'],
    threadText: 'Explore how structures influence outcomes beyond intention.',
    threadTarget: 'another-law-at-work-beyond-intention',
  },
  {
    slug: 'another-law-at-work-beyond-intention',
    title: 'Another Law at Work: Beyond Intention',
    subtitle: 'Why Outcomes Exceed What We Intend',
    hook: 'Good intentions do not operate in isolation.',
    overview: 'An exploration of the limits of intention in shaping outcomes, examining how systems, conditions, and invisible structures influence behaviour.',
    why: 'Much human behaviour cannot be explained by intention alone. This book examines the forces operating beyond conscious choice.',
    audience: ['Leaders', 'Behavioural thinkers', 'Social observers', 'Students of systems and influence'],
    themes: ['Intention', 'Systems', 'Behaviour', 'Influence', 'Structure', 'Consequences'],
    related: ['Within Judgment', 'The Fourth Crowd', 'The Little Tiny Webs We Make'],
    threadText: 'Explore how influence accumulates through ordinary behaviour.',
    threadTarget: 'the-little-tiny-webs-we-make',
  },
  {
    slug: 'when-judgment-is-no-longer-trusted',
    title: 'When Judgment Is No Longer Trusted',
    subtitle: 'Discernment Under Pressure',
    hook: 'What remains when clarity can no longer be assumed?',
    overview: 'A study of how discernment erodes under speed, uncertainty, visibility, and social pressure, and what is required to restore responsible judgment.',
    why: 'Many people lose trust in their judgment without understanding what caused the erosion. This work examines that process.',
    audience: ['Decision-makers', 'Leaders', 'Professionals under pressure', 'Readers interested in discernment'],
    themes: ['Discernment', 'Judgment', 'Clarity', 'Pressure', 'Responsibility', 'Trust'],
    related: ['Half a Mo', 'Another Law at Work: Within Judgment', 'The Zeitgeist of This Era'],
    threadText: 'Explore how discernment develops through disclosure and patience.',
    threadTarget: 'half-a-mo',
  },
  {
    slug: 'what-changes-when-everything-continues',
    title: 'What Changes When Everything Continues',
    subtitle: 'The Quiet Movements of Identity',
    hook: 'People often change most when nothing appears to be changing.',
    overview: 'A reflection on how identity, perception, and behaviour evolve internally while life appears externally stable.',
    why: 'Change is frequently associated with disruption. This book examines the quieter transformations produced by continuity itself.',
    audience: ['Reflective readers', 'Professionals in transition', 'Mentors and educators', 'Those navigating personal growth'],
    themes: ['Identity', 'Continuity', 'Adaptation', 'Growth', 'Self-understanding', 'Perception'],
    related: ['The Quiet Cost of Hurry', 'Foundations of the Great Youth', 'Stability Within Change'],
    threadText: 'Explore how pressure accelerates hidden change.',
    threadTarget: 'the-quiet-cost-of-hurry',
  },
  {
    slug: 'the-misunderstanding',
    title: 'The Misunderstanding',
    subtitle: 'Why Meaning Breaks Down',
    hook: 'Communication fails long before conversation collapses.',
    overview: 'A reflective inquiry into misunderstanding, tracing how assumptions, interference, partial perception, and premature certainty disrupt meaning.',
    why: 'People often assume disagreement is the problem. This work explores how misunderstanding frequently begins before disagreement appears.',
    audience: ['Leaders', 'Communicators', 'Couples', 'Educators', 'Reflective readers'],
    themes: ['Communication', 'Perception', 'Meaning', 'Assumptions', 'Understanding', 'Relationships'],
    related: ['Not Everyone Knows What You Know', "I Didn't Know This Was Also Love", 'Within Judgment'],
    threadText: 'Explore the hidden distance between speaking and understanding.',
    threadTarget: 'not-everyone-knows-what-you-know',
  },
  {
    slug: 'not-everyone-knows-what-you-know',
    title: 'Not Everyone Knows What You Know',
    subtitle: 'The Gap Between Knowledge and Understanding',
    hook: 'Understanding is rarely shared as completely as we imagine.',
    overview: 'A study of how knowledge, experience, and perspective create invisible differences between people.',
    why: 'Many communication problems emerge not from disagreement, but from assumptions about shared understanding.',
    audience: ['Teachers', 'Leaders', 'Communicators', 'Parents', 'Coaches'],
    themes: ['Knowledge', 'Understanding', 'Communication', 'Perspective', 'Assumptions', 'Responsibility'],
    related: ['The Misunderstanding', 'Beauty', 'Foundations of the Great Youth'],
    threadText: 'Explore how perception influences recognition and influence.',
    threadTarget: 'beauty-psychology-of-influence',
  },
  {
    slug: 'the-fourth-crowd',
    title: 'The Fourth Crowd',
    subtitle: 'How Behaviour Settles',
    hook: 'Harmful patterns rarely arrive dramatically. Most become normal gradually.',
    overview: 'An exploration of how collective behaviour forms, stabilises, and spreads within groups when nobody interrupts a developing pattern.',
    why: 'Many social outcomes emerge without deliberate intention. This work examines how responsibility becomes diffused and patterns become accepted.',
    audience: ['Leaders', 'Teachers', 'Team builders', 'Social observers', 'Organisational thinkers'],
    themes: ['Group Behaviour', 'Conformity', 'Influence', 'Responsibility', 'Culture', 'Social Dynamics'],
    related: ['The Little Tiny Webs We Make', 'When Conscience Meets Majority Pressure', 'Beyond Intention'],
    threadText: 'Explore the quieter mechanisms through which influence spreads.',
    threadTarget: 'the-little-tiny-webs-we-make',
  },
  {
    slug: 'the-little-tiny-webs-we-make',
    title: 'The Little Tiny Webs We Make',
    subtitle: 'Influence Without Force',
    hook: 'Most influence happens before anyone notices it happening.',
    overview: 'A study of how influence accumulates through repetition, habit, familiarity, and proximity, shaping shared realities over time.',
    why: 'Influence is often imagined as visible persuasion. This work examines the quieter forms of influence that shape daily life.',
    audience: ['Leaders', 'Parents', 'Educators', 'Communicators', 'Social observers'],
    themes: ['Influence', 'Familiarity', 'Repetition', 'Habits', 'Culture', 'Behaviour'],
    related: ['Beauty', 'The Fourth Crowd', 'When Conscience Meets Majority Pressure'],
    threadText: 'Explore how influence and recognition become leadership.',
    threadTarget: 'the-making-of-the-exceptional-leader',
  },
  {
    slug: 'when-conscience-meets-majority-pressure',
    title: 'When Conscience Meets Majority Pressure',
    subtitle: 'Alignment Under Social Influence',
    hook: 'The greatest pressure is often the pressure to agree.',
    overview: 'An examination of how conscience operates beneath collective influence and what it means to remain aligned when agreement forms before understanding.',
    why: 'Many people encounter social pressure long before they recognise it. This work explores how alignment survives in such conditions.',
    audience: ['Leaders', 'Students', 'Professionals', 'Faith communities', 'Reflective readers'],
    themes: ['Conscience', 'Alignment', 'Social Pressure', 'Courage', 'Influence', 'Integrity'],
    related: ['The Fourth Crowd', 'The Cost of Leadership', 'The Quiet Presence'],
    threadText: 'Explore responsibility when conviction must survive pressure.',
    threadTarget: 'the-cost-of-leadership',
  },
  {
    slug: 'the-cost-of-leadership',
    title: 'The Cost of Leadership',
    subtitle: 'What Leadership Requires',
    hook: 'Leadership often takes more than it gives.',
    overview: 'A sober examination of what remains when affirmation fades, responsibility grows, and steadiness becomes the central requirement.',
    why: 'Leadership is frequently discussed in terms of impact or success. This work examines what leadership costs the person carrying it.',
    audience: ['Leaders', 'Executives', 'Founders', 'Mentors', 'Decision-makers'],
    themes: ['Responsibility', 'Sacrifice', 'Leadership', 'Resilience', 'Duty', 'Steadiness'],
    related: ['The Making of the Exceptional Leader', 'When Conscience Meets Majority Pressure', 'When It Is Not Enough'],
    threadText: 'Explore leadership where responsibility cannot be transferred.',
    threadTarget: 'the-making-of-the-exceptional-leader',
  },
  {
    slug: 'when-it-is-not-enough',
    title: 'When It Is Not Enough',
    subtitle: 'Dignity at the Edge of Control',
    hook: 'Some realities remain unchanged despite every reasonable effort.',
    overview: 'A reflection on dignity, restraint, limitation, and endurance when responsibility and action have reached their natural limits.',
    why: 'Many people are prepared for success. Few are prepared for realities that cannot be altered through effort alone.',
    audience: ['Leaders', 'Caregivers', 'Helpers', 'Reflective readers', 'Anyone confronting limitation'],
    themes: ['Dignity', 'Acceptance', 'Endurance', 'Restraint', 'Limitation', 'Responsibility'],
    related: ['The Quiet Presence', 'The Cost of Leadership', 'Half a Mo'],
    threadText: 'Explore steadiness when certainty and control have reached their limits.',
    threadTarget: 'the-quiet-presence',
  },
  {
    slug: 'the-quiet-presence',
    title: 'The Quiet Presence',
    subtitle: 'Recognition Rather Than Pursuit',
    hook: 'Some realities become clearer when we stop trying to force them.',
    overview: 'A work of spiritual formation exploring recognition, trust, continuity, and the steady nearness of God.',
    why: 'Many spiritual lives become centred on pursuit. This work explores what changes when attention shifts from pursuit to recognition.',
    audience: ['Christians', 'Spiritual seekers', 'Reflective readers', 'Leaders and mentors'],
    themes: ['Faith', 'Recognition', 'Trust', 'Presence', 'Stability', 'Formation'],
    related: ['When It Is Not Enough', "I Didn't Know This Was Also Love", 'Half a Mo'],
    threadText: 'Explore discernment, disclosure, and the discipline of accurate judgment.',
    threadTarget: 'half-a-mo',
  },
  {
    slug: 'foundations-of-clarity',
    title: 'Foundations of Clarity',
    subtitle: 'The Conditions Under Which Understanding Begins',
    hook: 'Clarity does not begin with answers. It begins with the conditions that make answers possible.',
    overview: 'Foundations of Clarity serves as the conceptual foundation of the D. K. Arthur Canon. Examining perception, understanding, discernment, and judgment at their origin, the book explores how human beings come to recognise reality before they interpret it.',
    why: 'Many discussions focus on conclusions while overlooking the conditions that make accurate conclusions possible. This work examines those conditions directly.',
    audience: ['Readers interested in first principles', 'Thinkers and educators', 'Students of perception and judgment', 'Those seeking deeper conceptual foundations'],
    themes: ['Clarity', 'Perception', 'Understanding', 'Discernment', 'Judgment', 'Reality'],
    related: ['Half a Mo', 'Chaos Matter', 'Stability Within Change'],
    threadText: 'Explore how reality becomes sufficiently disclosed for judgment.',
    threadTarget: 'half-a-mo',
  },
  {
    slug: 'half-a-mo',
    title: 'Half a Mo',
    subtitle: 'Disclosure, Discernment & Judgment',
    hook: 'Closure should occur at the speed of reality, not at the speed of discomfort.',
    overview: 'Half a Mo explores discernment, disclosure, judgment, and the discipline of resisting premature conclusion. The book examines how reality unfolds over time and how accurate judgment depends upon allowing sufficient disclosure before closure occurs.',
    why: 'Many people seek certainty before reality has fully revealed itself. This work investigates the relationship between patience, discernment, and accurate judgment.',
    audience: ['Leaders', 'Decision makers', 'Mentors', 'Reflective readers', 'Anyone navigating uncertainty'],
    themes: ['Discernment', 'Disclosure', 'Judgment', 'Closure', 'Patience', 'Reality'],
    related: ['Foundations of Clarity', 'When Judgment Is No Longer Trusted', 'Chaos Matter'],
    threadText: 'Explore how clarity begins to emerge before it is recognised.',
    threadTarget: 'chaos-matter',
  },
  {
    slug: 'the-inner-compass',
    title: 'The Inner Compass',
    subtitle: 'A Narrative of Direction and Alignment',
    hook: 'Direction is rarely lost all at once. It is usually surrendered in small, unnoticed movements.',
    overview: 'A reflective narrative following the journey of Obrenpon as he navigates responsibility, identity, discipline, and purpose. Through story, the book explores how inner alignment is formed and maintained amid pressure and distraction.',
    why: 'Some realities are understood more deeply through experience than explanation. This story embodies principles that appear throughout the wider canon.',
    audience: ['Young adults', 'Leaders and mentors', 'Readers of reflective fiction', 'Anyone navigating questions of identity and purpose'],
    themes: ['Direction', 'Alignment', 'Discipline', 'Identity', 'Leadership', 'Growth'],
    related: ['Foundations of the Great Youth', 'The Great Forest Kingdom', 'The Making of the Exceptional Leader'],
    threadText: 'Explore leadership and responsibility through symbolic narrative.',
    threadTarget: 'the-great-forest-kingdom',
  },
  {
    slug: 'the-boy-who-threw-away-gold',
    title: 'The Boy Who Threw Away Gold',
    subtitle: 'On Value and Misrecognition',
    hook: 'Some losses begin long before anything is actually lost.',
    overview: 'A reflective narrative exploring value, misrecognition, perception, and regret. The story follows what happens when something genuine is dismissed before it is fully understood.',
    why: 'People often recognise value only after its absence becomes visible. This work explores that reality through narrative form.',
    audience: ['Reflective readers', 'Readers of literary fiction', 'Those interested in perception and value', 'Readers navigating loss and regret'],
    themes: ['Value', 'Recognition', 'Loss', 'Understanding', 'Regret', 'Perception'],
    related: ["I Didn't Know This Was Also Love", 'The Great Forest Kingdom', 'The Unseen Self'],
    threadText: 'Explore awareness before recognition becomes possible.',
    threadTarget: 'the-unseen-self',
  },
  {
    slug: 'the-unseen-self',
    title: 'The Unseen Self',
    subtitle: 'Awareness Before Recognition',
    hook: 'Not everything shaping a life is immediately visible.',
    overview: 'A narrative exploration of awareness, identity, influence, and the quiet forces operating beneath conscious recognition. Through story, the book examines how understanding often develops before it can be clearly named.',
    why: 'Many dimensions of human experience remain active long before they become conscious. This work explores those hidden movements.',
    audience: ['Readers of reflective fiction', 'Students of identity and awareness', 'Readers interested in personal formation', 'Followers of the wider Canon'],
    themes: ['Awareness', 'Identity', 'Influence', 'Recognition', 'Formation', 'Perception'],
    related: ['Foundations of Clarity', 'The Boy Who Threw Away Gold', 'Beauty: Psychology of Influence'],
    threadText: 'Return to the foundations of perception, understanding, and judgment.',
    threadTarget: 'foundations-of-clarity',
  },
]

const ProfileItem = ({ profile, isOpen, onToggle, onJump, itemRef }) => (
  <div ref={itemRef} id={profile.slug} className="scroll-mt-32 border-b border-gray-200">
    <button
      type="button"
      onClick={() => onToggle(profile.slug)}
      className="flex w-full items-center justify-between gap-4 py-5 text-left"
    >
      <span className="font-serif text-base font-bold text-gray-900 sm:text-lg lg:text-xl">
        {profile.title}
      </span>
      <ChevronDown
        className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-left">
            <p className="font-body text-sm italic text-gray-500 sm:text-base">
              {profile.subtitle}
            </p>
            <p className="mt-4 font-serif text-base italic leading-relaxed text-gray-800 sm:text-lg">
              "{profile.hook}"
            </p>

            <h4 className="mt-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              Overview
            </h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-gray-700 sm:text-base">
              {profile.overview}
            </p>

            <h4 className="mt-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              Why This Book Exists
            </h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-gray-700 sm:text-base">
              {profile.why}
            </p>

            <h4 className="mt-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              Who This Book Is For
            </h4>
            <ul className="mt-2 space-y-1">
              {profile.audience.map((a) => (
                <li key={a} className="font-body text-sm text-gray-700 sm:text-base">
                  {a}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              Key Themes
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-300 px-3 py-1 font-body text-xs text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <h4 className="mt-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              Related Works
            </h4>
            <ul className="mt-2 space-y-1">
              {profile.related.map((r) => (
                <li key={r} className="font-body text-sm text-gray-700 sm:text-base">
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="font-body text-sm italic text-gray-500">
                {profile.threadText}
              </p>
              <button
                type="button"
                onClick={() => onJump(profile.threadTarget)}
                className="mt-2 text-sm font-body text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                → {profiles.find((p) => p.slug === profile.threadTarget)?.title}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const TheDkArthurCanon = () => {
  const [openSlug, setOpenSlug] = useState(null)
  const itemRefs = useRef({})

  const toggle = (slug) => {
    setOpenSlug((prev) => (prev === slug ? null : slug))
  }

  const jumpTo = (slug) => {
    setOpenSlug(slug)
  }

  useEffect(() => {
    if (!openSlug) return
    const el = itemRefs.current[openSlug]
    if (el) {
      const timer = setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [openSlug])

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

      {/* Start Here */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24 lg:max-w-6xl">
        <Reveal>
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Start Here
            </h3>
            <p className="mt-3 font-body text-sm italic text-gray-500 sm:text-base">
              Different readers arrive with different questions.
            </p>
            <p className="mt-1 font-body text-sm italic text-gray-500 sm:text-base">
              Begin with the book that speaks most directly to the question you are already carrying.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-10">
          {readerPaths.map((path, index) => (
            <Reveal key={path.target} delay={(index % 3) * 0.1} y={16}>
              <div className="flex h-full flex-col border border-gray-200 p-6 text-left">
                <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-gray-500 sm:text-sm">
                  {path.question}
                </p>
                <p className="mt-3 font-serif text-base font-bold text-gray-900 sm:text-lg">
                  {path.title}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">
                  {path.blurb}
                </p>
                <p className="mt-3 font-body text-xs italic text-gray-400 sm:text-sm">
                  {path.recommended}
                </p>
                <button
                  type="button"
                  onClick={() => jumpTo(path.target)}
                  className="mt-4 inline-block w-fit text-sm font-body text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Start Here →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Explore the Canon */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24 lg:max-w-6xl">
        <Reveal>
          <h3 className="text-center font-serif text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Explore the Canon
          </h3>
        </Reveal>

        <div className="mt-10 lg:mt-12">
          {profiles.map((profile) => (
            <ProfileItem
              key={profile.slug}
              profile={profile}
              isOpen={openSlug === profile.slug}
              onToggle={toggle}
              onJump={jumpTo}
              itemRef={(el) => (itemRefs.current[profile.slug] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheDkArthurCanon