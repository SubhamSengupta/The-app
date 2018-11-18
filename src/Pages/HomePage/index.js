import React from 'react'
import BigBanner from '../../Components/BigBanner'

import HomePageBanner from './assets/home_page_banner.jpg'

const HomePage = () => (
  <div className='home-page'>
    <BigBanner src={HomePageBanner} alt='home_page_banner' />
  </div>
)

export default HomePage
