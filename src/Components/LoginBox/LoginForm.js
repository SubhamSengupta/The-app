import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import CommonInputField from './CommonInputField'

const LoginForm = ({
  shouldShow,
  email,
  password,
  onChange,
  onSubmit,
}) => (
  shouldShow
  && (
  <form onSubmit={onSubmit} className='login-form'>
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
    <div className='page-login-box-action-login-btn'>
      <Button variant='contained' color='primary' size='large'>
        LogIn
      </Button>
    </div>
  </form>
  )
)

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  email: '',
  password: '',
}

export default LoginForm
