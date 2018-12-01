import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import CommonInputField from './CommonInputField'

const SignupForm = ({
  shouldShow,
  name,
  email,
  password,
  onChange,
  onSubmit,
}) => (
  shouldShow
  && (
  <form onSubmit={onSubmit} className='signup-form'>
    <CommonInputField
      label='Name'
      name='name'
      value={name}
      onChange={onChange}
    />
    <CommonInputField
      label='Email ID'
      name='email'
      value={email}
      onChange={onChange}
    />
    <CommonInputField
      label='Password'
      name='password'
      value={password}
      onChange={onChange}
    />
    <div className='page-login-box-action-signup-btn'>
      <Button variant='contained' color='secondary' size='large'>
        Sign Up
      </Button>
    </div>
  </form>
  )
)

SignupForm.propTypes = {
  shouldShow: PropTypes.bool,
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

SignupForm.defaultProps = {
  shouldShow: false,
  name: '',
  email: '',
  password: '',
}

export default SignupForm
