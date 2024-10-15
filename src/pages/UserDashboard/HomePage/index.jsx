import React from 'react'
import Carousel from "../../../components/Carousel"
import HomeAbout from '../../../components/HomeAbout'
import HomeNews from '../../../components/HomeNews'
import HomeAd from '../../../components/HomeAd'
import HomeGallery from '../../../components/HomeGallery'
import HomePartners from '../../../components/HomePartners'
import Contact from '../../../components/Contact'

const HomePage = () => {
  return (
    <div>
        <Carousel />
        <HomeAbout />
        <HomeNews />
        <HomeAd />
        <HomeGallery />
        <HomePartners />
        <Contact />
    </div>
  )
}

export default HomePage;