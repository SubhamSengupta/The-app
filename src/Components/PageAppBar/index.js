import React from 'react'
import AppBar from '@material-ui/core/AppBar'

import './style.css'

const PageAppBar = () => (
  <div className='page-app-bar'>
    <AppBar classes={{ root: 'page-app-bar-root' }}>
      <div className='header-logo' />
      <ul>
        <li>About Us</li>
      </ul>
    </AppBar>
  </div>
)

export default PageAppBar
