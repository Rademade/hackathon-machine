import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyDate, FormsySelect} from 'formsy-material-ui/lib'
import {Paper, MenuItem} from 'material-ui'
import SubmitButton from 'components/buttons/SubmitButton'
import CancelButton from 'components/buttons/CancelButton'
import hackathonActions from 'actions/hackathon'
import navigationActions from 'actions/navigation'
import topicActions from 'actions/topic'
import speakerActions from 'actions/speaker'

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
    value={topics.length > 0 ? topics[0].id : 0}
    floatingLabelText="Topic">
      {topics.map(topic => <MenuItem key={topic.id} value={topic.id} primaryText={topic.name}/>)}
  </FormsySelect>
)

const SpeakerSelect = ({speakers}) => (
  <FormsySelect
    name="speaker_id"
    value={speakers.length > 0 ? speakers[0].id : 0}
    floatingLabelText="Speaker">
      {speakers.map(speaker => <MenuItem key={speaker.id} value={speaker.id} primaryText={speaker.full_name}/>)}
  </FormsySelect>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    hackathon: bindActionCreators(hackathonActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch),
    topic: bindActionCreators(topicActions, dispatch),
    speaker: bindActionCreators(speakerActions, dispatch)
  }
  dispatch(actions.topic.query())
  dispatch(actions.speaker.query())
  return {
    actions: actions
  }
}

const HackathonNew = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={actions.hackathon.create}>
      <h2 style={styles.title}>New Hackathon</h2>
      <TopicSelect topics={state.topicApp.topics}/>
      <FormsyDate
        name="conduction_date"
        floatingLabelText="Conduction date"
        value={new Date()}
        required/>
      <SpeakerSelect speakers={state.speakerApp.speakers}/>
      <SubmitButton label="Create"/>
      <CancelButton onTouchTap={actions.navigation.goToHackathons}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonNew)
