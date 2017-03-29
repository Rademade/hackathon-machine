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
  },
  titleSryle: {
    marginBottom: 0
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
    <Formsy.Form
      onSubmit={actions.login}
      onValid={actions.enableLoginButton}
      onInvalid={actions.disableLoginButton}>
      <h2 style={styles.titleSryle}>Вход</h2>
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
        style={styles.submitStyle}
        type="submit"
        disabled={!state.loginForm.canSubmit}
        label="Отправить"
      />
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
