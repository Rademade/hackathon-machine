import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import * as authActions from 'actions/auth'

const styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20,
    marginTop: 100
  },
  switchStyle: {
    marginBottom: 16
  },
  submitStyle: {
    marginTop: 32
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const HackathonNew = ({state, actions}) => (
  <Paper style={styles.paperStyle}>
    HackathonNew
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonNew)
