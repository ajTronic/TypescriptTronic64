import React from 'react'
import HeroSection from './HeroSection'
import Nav from "./TopNav"

const Home : React.FC = () => {
  return (
    <div className='home'>
      <Nav/>
      <HeroSection/>
    </div>
  )
}

export default Home