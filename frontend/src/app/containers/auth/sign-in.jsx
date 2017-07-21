import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Formsy from 'formsy-react';
import { FormsyText, FormsyToggle } from 'formsy-material-ui/lib';
import { Paper, RaisedButton } from 'material-ui';
import styler from 'react-styling';
import auth from 'actions/auth';
import navigation from 'actions/navigation';

const styles = styler(`
  paper:
    width: 300
    margin: auto
    padding-left: 20
    padding-right: 20
    margin-top: 75
  wraper:
    display: flex
    justify-content: space-between
  button:
    margin-top: 15
    margin-bottom: 25
  hideAutoFillColorStyle:
    -webkit-box-shadow: 0 0 0 1000px white inset
`);

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    navigation: bindActionCreators(navigation, dispatch)
  }
});

const SignIn = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form
      onSubmit={actions.auth.signIn}>
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
      <div style={styles.wraper}>
        <RaisedButton
          style={styles.button}
          primary={true}
          type="submit"
          label="Sing in"/>
        <RaisedButton
          style={styles.button}
          onTouchTap={actions.navigation.goToAuthSignUp}
          type="submit"
          label="Sign up"/>
      </div>
    </Formsy.Form>
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
