import React from 'react'
import Navbar from '../component/Navbar';
import HeroImg from '../component/HeroImg';
import Footer from '../component/Footer'
import Work from '../component/Work'
import WorkCard3 from '../component/WorkCard3';
import WorkCard2 from '../component/WorkCard2';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <WorkCard3 />

      <WorkCard2 />
      <Footer />
    </div>
  );   
}  

export default Home