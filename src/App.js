import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkThemeActive: false,
    activeTab: 'Home',
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDarkThemeActive: !prevState.isDarkThemeActive,
    }))
  }

  onChangeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDarkThemeActive, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkThemeActive,
          activeTab,
          toggleTheme: this.onChangeTheme,
          changeTab: this.onChangeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
