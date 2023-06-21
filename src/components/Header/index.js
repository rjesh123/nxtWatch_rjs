import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeContext from '../../context/ThemeContext'
import {
  NavBarHeader,
  LogoLink,
  HeaderLogo,
  IconsContainer,
  ThemeButton,
  MobileProfileImage,
  DesktopProfileImage,
  ProfileImage,
  MobileLogoutButton,
  DesktopLogoutButton,
  ModalContainer,
  ModelDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkThemeActive, toggleTheme} = value

      const logoUrl = isDarkThemeActive
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const bgColor = isDarkThemeActive ? '#231f20' : '#ffffff'
      const color = isDarkThemeActive ? '#f1f1f1' : '#3b82f6'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <NavBarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo src={logoUrl} alt="website logo" />
          </LogoLink>
          <IconsContainer>
            <ThemeButton
              type="button"
              date-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkThemeActive ? (
                <BsBrightnessHigh color="#ffffff" size={40} />
              ) : (
                <BsMoon size={40} />
              )}
            </ThemeButton>
            <MobileProfileImage>
              <GiHamburgerMenu
                size={40}
                color={isDarkThemeActive ? '#ffffff' : null}
              />
            </MobileProfileImage>
            <DesktopProfileImage>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </DesktopProfileImage>
            <Popup
              modal
              trigger={
                <MobileLogoutButton type="button">
                  <FiLogOut
                    size={40}
                    color={isDarkThemeActive ? '#ffffff' : null}
                  />
                </MobileLogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModelDesc>Are you sure want to logout?</ModelDesc>
                  <ButtonsContainer>
                    <CloseButton type="button" onClick={() => close()}>
                      Close
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <DesktopLogoutButton type="button" color={color}>
                  Logout
                </DesktopLogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModelDesc>Are you sure want to logout?</ModelDesc>
                  <ButtonsContainer>
                    <CloseButton type="button" onClick={() => close()}>
                      Close
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </IconsContainer>
        </NavBarHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
