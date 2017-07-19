import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyDate, FormsySelect, FormsyText} from 'formsy-material-ui/lib'
import {Paper, MenuItem} from 'material-ui'
import SubmitButton from 'components/buttons/SubmitButton'
import CancelButton from 'components/buttons/CancelButton'
import hackathonActions from 'actions/hackathon'
import navigationActions from 'actions/navigation'
import topicActions from 'actions/topic'
import speakerActions from 'actions/speaker'

const styles = {
  paper: {
    width: 600,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    paddingTop: 20,
    marginBottom: 0
  }
}

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

  dispatch(actions.topic.query());
  dispatch(actions.speaker.query());

  return {
    actions: actions
  }
}

const HackathonNew = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={actions.hackathon.create}>
      <h2 style={styles.title}>New Hackathon</h2>
      <FormsySelect
        name="topic_id"
        value={state.topicApp.topics.length > 0 ? state.topicApp.topics[0].id : 0}
        floatingLabelText="Topic"
        fullWidth={true}>
        {state.topicApp.topics.map(topic =>
          <MenuItem
            key={topic.id}
            value={topic.id}
            primaryText={topic.name}/>)}
      </FormsySelect>
      <FormsyDate
        name="conduction_date"
        floatingLabelText="Conduction date"
        value={new Date()}
        fullWidth={true}
        required/>
      <FormsySelect
        name="speaker_id"
        value={state.speakerApp.speakers.length > 0 ? state.speakerApp.speakers[0].id : 0}
        floatingLabelText="Speaker"
        fullWidth={true}>
        {state.speakerApp.speakers.map(speaker =>
          <MenuItem
            key={speaker.id}
            value={speaker.id}
            primaryText={speaker.full_name}/>)}
      </FormsySelect>
      <FormsyText
        name="url"
        value={state.hackathonApp.hackathon ? state.hackathonApp.hackathon.material : null}
        hintText="http://www.example.com"
        floatingLabelText="Materials link"
        multiLine={true}
        rows={3}
        type={"text"}
        fullWidth={true}/>
      <SubmitButton label="Create"/>
      <CancelButton onTouchTap={actions.navigation.goToHackathons}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonNew)
