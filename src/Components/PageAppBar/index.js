import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import './style.css'

const PageAppBar = () => (
  <div className='page-app-bar'>
    <AppBar className='page-app-bar-root'>
      <Toolbar />
    </AppBar>
  </div>
)

export default PageAppBar
