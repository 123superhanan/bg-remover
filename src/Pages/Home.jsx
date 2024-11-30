import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/Steps'
import BgSlide from '../Components/bgSlide'
import Testimonial from '../Components/Testimonial'
import Upload from '../Components/upload'

const Home = () => {
  return (
    <div>
     <Header />
     <Steps />
     <BgSlide/>
     <Testimonial/>
     <Upload />
    </div>
  )
}

export default Home
