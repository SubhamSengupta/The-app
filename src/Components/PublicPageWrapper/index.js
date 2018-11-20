import React from 'react'
import PropTypes from 'prop-types'
import PageAppBar from '../PageAppBar'

const PublicPageWrapper = ({ children, className }) => (
  <div className={`public-page-wrapper ${className || ''}`.trim()}>
    <PageAppBar />
    {children}
  </div>
)

PublicPageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
}

export default PublicPageWrapper
