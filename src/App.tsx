import React from 'react'
import './css/App.css'
import HeroSection from './ui/HeroSection'
import Nav from "./ui/TopNav"

const App : React.FC = () => {
  return (
    <div className='app'>
      <Nav/>
      <HeroSection/>
    </div>
  )
}

export default App