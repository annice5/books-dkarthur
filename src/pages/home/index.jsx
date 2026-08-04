import React from 'react'
import Hero from './components/hero'
import LatestReleases from './components/latestReleases'
import Reviews from './components/reviews'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestReleases/>
      <Reviews/>
    </div>
  )
}

export default Home