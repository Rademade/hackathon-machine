import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import * as authActions from 'actions/auth'

const paperStyle = {
  width: 300,
  margin: 'auto',
  padding: 20,
  marginTop: 100
};

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const Login = ({state, actions}) => (
  <Paper style={paperStyle}>
    <Formsy.Form
      onSubmit={actions.login}
      onValid={actions.enableLoginButton}
      onInvalid={actions.disableLoginButton}>
      <h2>Вход</h2>
      <FormsyText
        name="email"
        validations="isEmail"
        validationError={'Email не валидный'}
        required
        hintText="Какой Ваш email?"
        floatingLabelText="Email"
      />
      <FormsyText
        name="password"
        hintText="Какой Ваш пароль?"
        floatingLabelText="Пароль"
      />
      <RaisedButton
        style={{marginTop: 32}}
        type="submit"
        disabled={!state.loginForm.canSubmit}
        label="Войти"
      />
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
