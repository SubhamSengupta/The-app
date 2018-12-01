import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './style.css'

class LoginBox extends React.Component {
  constructor() {
    super()
    this.state = { isLogin: !true }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState((prevState) => {
      const newState = { ...prevState }
      newState[name] = value
      return newState
    })
  }

  handleSubmit = () => {
    // to handle submit event
  }

  render() {
    const {
      name,
      email,
      password,
      isLogin,
    } = this.state
    return (
      <div className='page-login-box'>
        <Card className='page-login-box-card'>
          <CardContent>
            <Typography className='page-login-box-card-title' variant='display1' gutterBottom>
              Get started with us.
            </Typography>
            <LoginForm
              shouldShow={isLogin}
              email={email}
              password={password}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
            <SignupForm
              shouldShow={!isLogin}
              name={name}
              email={email}
              password={password}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default LoginBox
