import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {AppBar, FlatButton} from 'material-ui'
import authActions from 'actions/auth'
import navigationActions from 'actions/navigation'

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({...authActions, ...navigationActions}, dispatch)
})

const Header = ({state, actions}) => (
  <AppBar
    title={<span style={{cursor: 'pointer'}}>Hackathon Machine</span>}
    onTitleTouchTap={actions.goToRoot}
    onLeftIconButtonTouchTap={actions.goToRoot}
    iconElementRight={
      (state.isAuthenticated
        ? <FlatButton label="Logout" onTouchTap={actions.logout}/>
        : null
      )
    }>
  </AppBar>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
