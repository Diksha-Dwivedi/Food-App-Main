import Steps from './Steps';
import Features from './Features';
import Home from './Home';
import Contact from './Contact';
import Navi from './Navi';
import Review from './Review';

import EatingHealthy from './EatingHealthy';


import React from 'react'

const Main = () => {
  return (
   <>
   <Navi />
   <Home />
   <Features />
    <Steps /> 
    <Review />
    <EatingHealthy />
   <Contact />
   
   
   
   </>
  )
}

export default Main