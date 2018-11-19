import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const BigBanner = ({ src, alt }) => (
  <div className='big-banner'>
    <img src={src} alt={alt} />
  </div>
)

BigBanner.defaultProps = {
  alt: 'banner_img',
}

BigBanner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default BigBanner
