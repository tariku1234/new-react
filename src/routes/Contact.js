import React from 'react'
import Navbar from '../component/Navbar';

import Footer from '../component/Footer'
import HeroImg2 from '../component/HeroImg2';
import Form from '../component/Form';
 const Contact = () => {

  

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  ) 
}

export default Contact