import React from 'react'
import BigBanner from '../../Components/BigBanner'
import PageAppBar from '../../Components/PageAppBar'

import HomePageBanner from './assets/home_page_banner.jpg'

const HomePage = () => (
  <div className='home-page'>
    <BigBanner src={HomePageBanner} />
    <PageAppBar />
  </div>
)

export default HomePage
