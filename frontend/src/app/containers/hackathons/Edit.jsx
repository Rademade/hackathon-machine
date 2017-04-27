import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle, FormsyDate, FormsySelect} from 'formsy-material-ui/lib'
import {Paper, MenuItem} from 'material-ui'
import SubmitButton from 'components/buttons/SubmitButton'
import CancelButton from 'components/buttons/CancelButton'
import hackathonActions from 'actions/hackathon'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: 300,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    paddingTop: 20,
    marginBottom: 0
  }
}

const TopicSelect = ({topics}) => (
  <FormsySelect
    name="topic_id"
    value={topics[0].id}
    floatingLabelText="Topic">
      {topics.map(topic => <MenuItem key={topic.id} value={topic.id} primaryText={topic.title}/>)}
  </FormsySelect>
)

const SpeakerSelect = ({speakers}) => (
  <FormsySelect
    name="speaker_id"
    value={speakers[0].id}
    floatingLabelText="Speaker">
      {speakers.map(speaker => <MenuItem key={speaker.id} value={speaker.id} primaryText={speaker.full_name}/>)}
  </FormsySelect>
)

const mapStateToProps = (state, ownProps) => ({
  state: Object.assign(state, {params: ownProps.params})
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    hackathon: bindActionCreators(hackathonActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.hackathon.get(ownProps.params.id))

  return {
    actions: actions
  }
}

const onSubmit = (id, actions) => {
  return function (formData) {
    actions.hackathon.update(Object.assign(formData, { id : id }))
  }
}

const HackathonEdit = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={onSubmit(state.params.id - 0, actions)}>
      <h2 style={styles.title}>Edit Hackathon</h2>
      <TopicSelect topics={state.topicApp.topics}/>
      <FormsyDate
        name="date"
        value={new Date()}
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
      <SubmitButton label={'Save'}/>
      <CancelButton onTouchTap={actions.navigation.goToHackathons}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonEdit)
