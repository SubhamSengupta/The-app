import React from 'react'
import BigBanner from '../../Components/BigBanner'
import PageAppBar from '../../Components/PageAppBar'
import LoginBox from '../../Components/LoginBox'

import HomePageBanner from './assets/home_page_banner.jpg'

const HomePage = () => (
  <div className='home-page'>
    <BigBanner src={HomePageBanner} />
    <PageAppBar />
    <LoginBox />
  </div>
)

export default HomePage
