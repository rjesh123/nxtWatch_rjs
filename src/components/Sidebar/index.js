import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarContainer,
  PathContainer,
  LinkItem,
  ListItem,
  ItemName,
  ContactContainer,
  ContactHeading,
  SocialContainer,
  SocialLogo,
  ContactDesc,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkThemeActive, activeTab, changeTab} = value
      const bgColor = isDarkThemeActive ? '#231f20' : '#ffffff'
      const color = isDarkThemeActive ? '#f4f4f4' : '#1e293b'
      const activeTabBg = isDarkThemeActive ? '#424242' : '#d7dfe9'

      const onClickTabHome = () => {
        changeTab('Home')
      }

      const onClickTabTrending = () => {
        changeTab('Trending')
      }

      const onClickTabGaming = () => {
        changeTab('Gaming')
      }

      const onClickTabSavedVideos = () => {
        changeTab('Saved videos')
      }

      return (
        <SidebarContainer bgColor={bgColor}>
          <PathContainer>
            <LinkItem to="/">
              <ListItem
                key="home"
                bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                onClick={onClickTabHome}
              >
                <AiFillHome
                  size={20}
                  color={activeTab === 'Home' ? '#ff0b37' : '#7e858e'}
                />
                <ItemName color={color}>Home</ItemName>
              </ListItem>
            </LinkItem>
            <LinkItem to="/trending">
              <ListItem
                key="trending"
                bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                onClick={onClickTabTrending}
              >
                <HiFire
                  size={20}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#7e858e'}
                />
                <ItemName color={color}>Trending</ItemName>
              </ListItem>
            </LinkItem>
            <LinkItem to="/gaming">
              <ListItem
                key="gaming"
                bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                onClick={onClickTabGaming}
              >
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#7e858e'}
                />
                <ItemName color={color}>Gaming</ItemName>
              </ListItem>
            </LinkItem>
            <LinkItem to="/saved-videos">
              <ListItem
                key="saved videos"
                bgColor={activeTab === 'Saved videos' ? activeTabBg : 'none'}
                onClick={onClickTabSavedVideos}
              >
                <CgPlayListAdd
                  size={20}
                  color={activeTab === 'Saved videos' ? '#ff0b37' : '#7e858e'}
                />
                <ItemName color={color}>Saved videos</ItemName>
              </ListItem>
            </LinkItem>
          </PathContainer>
          <ContactContainer>
            <ContactHeading color={color}>CONTACT US</ContactHeading>
            <SocialContainer>
              <SocialLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialContainer>
            <ContactDesc color={color}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDesc>
          </ContactContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
