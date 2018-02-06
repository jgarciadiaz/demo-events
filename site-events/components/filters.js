import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'

import ActionHome from 'material-ui/svg-icons/action/home'
import ActionGrade from 'material-ui/svg-icons/action/grade'

const getItemColor = (index, selectedIndex) => index === selectedIndex ? '#c10808' : null
const weatherStyle = {
  color: '#999'
}

export default ({ selectedIndex, clickHandler, weather }) => (
  <BottomNavigation selectedIndex={selectedIndex}>
    <BottomNavigationItem
      icon={<FontIcon color={getItemColor(0, selectedIndex)}>All</FontIcon>}
      onClick={() => clickHandler(0)}
    />
    <BottomNavigationItem
      icon={<ActionHome color={getItemColor(1, selectedIndex)} />}
      onClick={() => clickHandler(1)}
    />
    <BottomNavigationItem
      icon={<ActionGrade color={getItemColor(2, selectedIndex)} />}
      onClick={() => clickHandler(2)}
    />
    <BottomNavigationItem
      icon={<span style={weatherStyle}>{weather.fahrenheit} &deg;F</span>}
    />
  </BottomNavigation>
)
