import React from 'react'
import Formsy from 'formsy-react'
import {FormsyText} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'

const wordsError = "Please only use letters"
const numericError = "Please provide a number"
const urlError = "Please provide a valid URL"

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

const LogIn = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Paper style={paperStyle}>
      <Formsy.Form>
        <FormsyText
          name="email"
          validations="isWords"
          validationError={wordsError}
          required
          hintText="What is your email?"
          floatingLabelText="Email"
        />
        <FormsyText
          name="password"
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

export default LogIn
