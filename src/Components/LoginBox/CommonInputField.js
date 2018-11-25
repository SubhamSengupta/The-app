import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const CommonInputField = ({
  label,
  name,
  value,
  onChange,
}) => (
  <TextField
    id={`page-login-box-${name}`}
    label={label}
    className='page-login-box-card-text-field'
    name='email'
    value={value}
    type={name}
    onChange={onChange}
    margin='normal'
    variant='outlined'
    fullWidth
  />
)

CommonInputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CommonInputField
