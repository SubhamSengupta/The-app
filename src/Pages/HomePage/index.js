import React from 'react'
import PublicPageWrapper from '../../Components/PublicPageWrapper'
import BigBanner from '../../Components/BigBanner'
import LoginBox from '../../Components/LoginBox'

import HomePageBanner from './assets/home_page_banner.jpg'

const HomePage = () => (
  <PublicPageWrapper className='home-page'>
    <BigBanner src={HomePageBanner} />
    <LoginBox />
  </PublicPageWrapper>
)

export default HomePage
