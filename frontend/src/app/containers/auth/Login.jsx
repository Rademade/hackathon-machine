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

const Login = ({state, actions}) => (
  <Paper style={styles.paperStyle}>
    <Formsy.Form>
      <span>Log in</span>
      <FormsyText
        name="email"
        validations="isEmail"
        validationError={'Email not valid'}
        required
        hintText="What is your email?"
        floatingLabelText="Email"
      />
      <FormsyText
        name="password"
        validations="maxLength"
        hintText="What is your password?"
        floatingLabelText="Password"
      />
      <RaisedButton
        style={styles.submitStyle}
        type="submit"
        label="Submit"
      />
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
