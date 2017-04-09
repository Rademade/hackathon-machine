import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle, FormsyDate, FormsySelect} from 'formsy-material-ui/lib'
import {Paper, MenuItem, RaisedButton, FlatButton} from 'material-ui'
import hackathonActions from 'actions/hackathon'
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

const TopicSelect = ({topics}) => (
  <FormsySelect
    name="topic"
    floatingLabelText="Topic"
    required>
      {topics.map(topic => <MenuItem key={topic.id} value={topic.id} primaryText={topic.title}/>)}
  </FormsySelect>
)

const SpeakerSelect = ({speakers}) => (
  <FormsySelect
    name="speaker"
    floatingLabelText="Speaker"
    required>
      {speakers.map(speaker => <MenuItem key={speaker.id} value={speaker.id} primaryText={speaker.full_name}/>)}
  </FormsySelect>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(navigationActions, dispatch)
})

const HackathonEdit = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form>
      <h2 style={styles.title}>Edit Hackathon</h2>
      <TopicSelect topics={state.topicApp.topics}/>
      <FormsyDate
        name="date"
        floatingLabelText="Conduction date"
        required/>
      <SpeakerSelect speakers={state.speakerApp.speakers}/>
      <FormsyToggle
        name="toggle"
        label="Conducted?"
        style={styles.button}/>
      <FormsyText
        name="url"
        validations="isUrl"
        validationError={'Incorrect link'}
        hintText="http://www.example.com"
        floatingLabelText="Materials link"
        updateImmediately/>
      <RaisedButton
        type="submit"
        label="Save"
        primary={true}
        style={styles.button}/>
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={actions.goToHackathons}
        style={styles.button}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonEdit)
