import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginPageContainer,
  LoginResponsiveContainer,
  LogoImage,
  FormContainer,
  InputContainer,
  Label,
  Input,
  CheckBoxContainer,
  CheckBoxInput,
  PasswordLabel,
  LoginButton,
  ShowMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderPasswordInputContainer = (labelTextColor, isDarkThemeActive) => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const passwordColor = isDarkThemeActive ? '#ffffff' : '#212121'
    return (
      <InputContainer>
        <Label htmlFor="password" labelTextColor={labelTextColor}>
          PASSWORD
        </Label>
        <Input
          type={inputType}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
        <CheckBoxContainer>
          <CheckBoxInput
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <PasswordLabel htmlFor="checkbox" passwordColor={passwordColor}>
            Show Password
          </PasswordLabel>
        </CheckBoxContainer>
      </InputContainer>
    )
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsernameInputContainer = labelTextColor => {
    const {username} = this.state
    return (
      <InputContainer>
        <Label htmlFor="username" labelTextColor={labelTextColor}>
          USERNAME
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </InputContainer>
    )
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkThemeActive} = value
          const {showErrorMsg, errorMsg} = this.state

          const logoUrl = isDarkThemeActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const loginBgColor = isDarkThemeActive ? '#181818' : '#ffffff'
          const responsiveBgColor = isDarkThemeActive ? '#0f0f0f' : '#ffffff'
          const labelTextColor = isDarkThemeActive ? '#ebebeb' : '#7e858e'

          return (
            <LoginPageContainer loginBgColor={loginBgColor}>
              <LoginResponsiveContainer responsiveBgColor={responsiveBgColor}>
                <LogoImage src={logoUrl} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  {this.renderUsernameInputContainer(labelTextColor)}
                  {this.renderPasswordInputContainer(
                    labelTextColor,
                    isDarkThemeActive,
                  )}
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <ShowMsg>*{errorMsg}</ShowMsg>}
                </FormContainer>
              </LoginResponsiveContainer>
            </LoginPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
