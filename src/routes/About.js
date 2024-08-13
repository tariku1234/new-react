import React from 'react'
import Navbar from '../component/Navbar';

import Footer from '../component/Footer'
import HeroImg2 from '../component/HeroImg2';
import AboutContact from '../component/AboutContact';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im a friendly Ftont-End Developer." />
      <AboutContact />
      <Footer />
    </div>
  )
}

export default About