// import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import Offers from '../components/Offers' // 👈 Add this

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <Offers /> {/* 👈 Add this line */}

      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home