import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {RaisedButton} from 'material-ui'
import navigationActions from 'actions/navigation'

const styles = {
  root: {
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    margin: 10
  }
}

const isActive = (expectedPath, currentPath) => (new RegExp(expectedPath)).test(currentPath)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(navigationActions, dispatch)
})

const Navigation = ({state, actions}) => (
  state.authApp.isAuthenticated
    ? <div style={styles.root}>
        <RaisedButton
          label="Hackatons"
          onTouchTap={actions.goToHackathons}
          primary={isActive('/hackathons', state.routing.locationBeforeTransitions.pathname)}
          style={styles.button}/>
        <RaisedButton
          label="Topics"
          onTouchTap={actions.goToTopics}
          primary={isActive('/topics', state.routing.locationBeforeTransitions.pathname)}
          style={styles.button}/>
        <RaisedButton
          label="Users"
          onTouchTap={actions.goToUsers}
          primary={isActive('/users', state.routing.locationBeforeTransitions.pathname)}
          style={styles.button}/>
      </div>
    : null
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
