import React from 'react'
import AppBar from 'material-ui/AppBar'
import {browserHistory} from 'react-router'

const Header = () => (
  <AppBar
    title={'Hackathon Machine'}
    onLeftIconButtonTouchTap={() => browserHistory.push('/')}
    onTitleTouchTap={() => browserHistory.push('/')}
  />
)

export default Header
