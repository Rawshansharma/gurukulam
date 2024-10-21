import React from 'react'
import Hero from './Hero'
import Footer from "./Footer"
import Carousel from './Carousel'
 

const Home = () => {
  return (
    <div> 
        <Carousel/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home