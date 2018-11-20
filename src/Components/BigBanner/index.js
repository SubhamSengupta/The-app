import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const BigBanner = ({ src }) => (
  <div
    className='big-banner'
    style={{ backgroundImage: `url(${src})` }}
  />
)

BigBanner.propTypes = {
  src: PropTypes.string.isRequired,
}

export default BigBanner
