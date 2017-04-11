import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import {Paper, RaisedButton} from 'material-ui'
import authActions from 'actions/auth'

const styles = {
  paper: {
    width: 300,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 75
  },
  button: {
    marginTop: 15,
    marginBottom: 25
  },
  hideAutoFillColorStyle: {
    WebkitBoxShadow: '0 0 0 1000px white inset'
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const Login = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form
      onSubmit={actions.login}
      onValid={actions.enableLogin}
      onInvalid={actions.enableLogin}>
      <FormsyText
        name="email"
        type="email"
        validations="isEmail"
        validationError={'This is not a valid email'}
        hintText="What your email?"
        floatingLabelText="Email"
        inputStyle={styles.hideAutoFillColorStyle}
        required/>
      <FormsyText
        name="password"
        type="password"
        hintText="What is your password?"
        floatingLabelText="Password"
        inputStyle={styles.hideAutoFillColorStyle}
        required/>
      <RaisedButton
        style={styles.button}
        type="submit"
        disabled={!state.loginForm.isAvailableSubmit}
        label="Login"/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
