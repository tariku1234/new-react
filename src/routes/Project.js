import React from 'react'

import HeroImg2 from '../component/HeroImg2';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import PricingCard from '../component/PricingCard';


import WorkCard3 from '../component/WorkCard3';
const Project = () => { 
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="some of my projects"/>
      
      <WorkCard3 />
      <PricingCard />
     
      <Footer />
      
    </div>
  )
}

export default Project