import React from 'react'
import {connect} from 'react-redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'

const emailError = "Email not valid"
const paperStyle = {
  width: 300,
  margin: 'auto',
  padding: 20,
  marginTop: 100
}

const switchStyle = {
  marginBottom: 16,
}

const submitStyle = {
  marginTop: 32
}

const mapStateToProps = (state, ownProps) => ({
  state: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const LogIn = ({state, actions}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Paper style={paperStyle}>
      <Formsy.Form>
        <FormsyToggle
          name="toggle"
          label={state.isRegistration ? 'Registration' : 'Log in'}
          style={switchStyle}
        />

        <FormsyText
          name="email"
          validations="isEmail"
          validationError={emailError}
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
          style={submitStyle}
          type="submit"
          label="Submit"
        />
      </Formsy.Form>
    </Paper>
  </MuiThemeProvider>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)
