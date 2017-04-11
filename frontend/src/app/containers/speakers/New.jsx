import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText} from 'formsy-material-ui/lib'
import {Paper, RaisedButton, FlatButton} from 'material-ui'
import speakerActions from 'actions/speaker'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: 300,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    marginTop: 15,
    marginBottom: 25,
    marginRight: 20
  },
  title: {
    paddingTop: 20,
    marginBottom: 0
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }
})

const SpeakerNew = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={actions.speaker.create}>
      <h2 style={styles.title}>New Speaker</h2>
      <FormsyText
        name="full_name"
        type="text"
        hintText="What is him name?"
        floatingLabelText="Full Name"
        inputStyle={styles.hideAutoFillColorStyle}
        required/>
      <RaisedButton
        type="submit"
        label="Create"
        primary={true}
        style={styles.button}/>
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={actions.navigation.goToSpeakers}
        style={styles.button}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakerNew)
