import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import {browserHistory} from 'react-router'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import {ToolbarGroup} from 'material-ui/Toolbar'
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton'
import * as authActions from 'actions/auth'
import * as tabsActions from 'actions/tabs'

const styles = {
  title: {
    cursor: 'pointer'
  },
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '80%',
  }
}

const getLoginTab = ({state, actions}) => {
  if (state.isAuthenticated) {
    return (
      <Tab
        label='Logout'
        onActive={actions.logout}/>
    )
  } else {
    return null;
  }
}

const getTopicsTab = ({state, actions}) => (
  <Tab label="Topics" onActive={actions.navigateToTopics} style={styles.headline}>
  </Tab>
)

const getHackatonsTab = ({state, actions}) => (
  <Tab
    label='Hackatons'
    onActive={actions.navigateToHackatons}/>
)

const getUsersTab = ({state, actions}) => (
  <Tab
    label='Users'
    onActive={actions.navigateToUsers}/>
)

const getLoggedTabs = ({state, actions}) => (
  <Tabs style={styles.tabs}>
    {getTopicsTab({state, actions})}
    {getHackatonsTab({state, actions})}
    {getUsersTab({state, actions})}
    {getLoginTab({state, actions})}
  </Tabs>
)

const getTabs = ({state, actions}) => {
  if (state.jwt) { return getLoggedTabs({state, actions}); }
}

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(Object.assign({}, tabsActions, authActions), dispatch)
})

const Header = ({state, actions}) => (
  <AppBar
    title={<span style={styles.title}>Hackathon Machine</span>}
    style={styles.appBar}
    onLeftIconButtonTouchTap={() => browserHistory.push('/')}
    onTitleTouchTap={() => browserHistory.push('/')}>

    {getTabs({state, actions})}

  </AppBar>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
