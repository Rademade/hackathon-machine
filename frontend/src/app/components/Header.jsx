import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import * as authActions from 'actions/auth'

const styles = {
  title: {
    cursor: 'pointer'
  }
}

const getAuthButton = ({state, actions}) => {
  if (state.isLogined) {
    return (
      <FlatButton
        label='Logout'
        onTouchTap={actions.logout}/>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const Header = ({state, actions}) => (
  <AppBar
    title={<span style={styles.title}>Hackathon Machine</span>}
    onLeftIconButtonTouchTap={() => browserHistory.push('/')}
    onTitleTouchTap={() => browserHistory.push('/')}
    iconElementRight={getAuthButton({state, actions})}/>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
