import React from 'react'
import PublicPageWrapper from '../../components/PublicPageWrapper'
import BigBanner from '../../components/BigBanner'

import HomePageBanner from './assets/home_page_banner.jpg'

const HomePage = () => (
  <PublicPageWrapper className='home-page'>
    <BigBanner src={HomePageBanner} />
  </PublicPageWrapper>
)

export default HomePage
