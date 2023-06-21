import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  height: 90vh;
  width: 20%;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const PathContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 15px;
`
export const ItemName = styled.p`
  color: ${props => props.color};
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
`
export const ContactHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SocialLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ContactDesc = styled.p`
  color: ${props => props.color};
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 500;
`
