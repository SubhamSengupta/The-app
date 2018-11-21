import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './style.css'

class LoginBox extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState((prevState) => {
      const newState = { ...prevState }
      newState[name] = value
      return newState
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='page-login-box'>
        <Card className='page-login-box-card'>
          <CardContent>
            <Typography className='page-login-box-card-title' variant='display1' gutterBottom>
              Get started with us.
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id='page-login-box-email'
                label='Your Email ID'
                className='page-login-box-card-text-field'
                name='email'
                value={email || ''}
                type='email'
                onChange={this.handleChange}
                margin='normal'
                variant='outlined'
                fullWidth
              />
              <TextField
                id='page-login-box-password'
                label='Your Password'
                className='page-login-box-card-text-field'
                name='password'
                value={password || ''}
                type='password'
                onChange={this.handleChange}
                margin='normal'
                variant='outlined'
                fullWidth
              />
              <div className='page-login-box-action-btn'>
                <Button variant='contained' color='primary' size='large'>
                  LogIn
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default LoginBox
