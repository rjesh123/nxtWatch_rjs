import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 20px;
  height: 10vh;
  @media screen and (min-width: 576px) {
    padding-right: 35px;
    padding-left: 35px;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  height: 40px;
  width: 100px;
  @media screen and (min-width: 576px) {
    height: 40px;
    width: 120px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    margin-right: 20px;
  }
`

export const MobileProfileImage = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const DesktopProfileImage = styled.div`
  display: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  }
`
export const MobileLogoutButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const DesktopLogoutButton = styled.button`
  display: none;
  background-color: transparent;
  border-radius: 5px;
  border: ${props => props.color} solid 0.5px;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    display: flex;
    margin-left: 20px;
    font-size: 18px;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const ModelDesc = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: #cccccc solid 0.5px;
  color: #cccccc;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 576px) {
    display: flex;
    margin-left: 20px;
    font-size: 18px;
  }
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  color: #f1f1f1;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 576px) {
    display: flex;
    margin-left: 20px;
    font-size: 18px;
  }
`
