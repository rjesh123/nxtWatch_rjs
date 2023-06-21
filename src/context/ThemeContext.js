import React from 'react'

const ThemeContext = React.createContext({
  isDarkThemeActive: false,
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
})

export default ThemeContext
