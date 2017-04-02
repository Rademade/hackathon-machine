import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {
  FormsyText, FormsyToggle, FormsyDate, FormsySelect
} from 'formsy-material-ui/lib'
import {RaisedButton, Paper, MenuItem} from 'material-ui'
import * as hackathonActions from 'actions/hackathon'

const paperStyle = {
  width: 300,
  margin: 'auto',
  padding: 20,
  marginTop: 50
}

const TopicSelect = ({topics}) => (
  <FormsySelect name="topic" floatingLabelText="Тема хакатона" required>
    {topics.map(topic => <MenuItem key={topic.id} value={topic.id} primaryText={topic.title}/>)}
  </FormsySelect>
)

const SpeakerSelect = ({speakers}) => (
  <FormsySelect name="speaker" floatingLabelText="Кто делает доклад?" required>
    {speakers.map(speaker => <MenuItem key={speaker.id} value={speaker.id} primaryText={speaker.full_name}/>)}
  </FormsySelect>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(hackathonActions, dispatch)
})

const HackathonNew = ({state, actions}) => (
  <Paper style={paperStyle}>
    <Formsy.Form>
      <h2>Создать хакатон</h2>
      <TopicSelect topics={state.topicApp.topics}/>
      <FormsyDate
        name="date"
        floatingLabelText="Дата проведения"
        required/>
      <SpeakerSelect speakers={state.speakerApp.speakers}/>
      <RaisedButton
        style={{marginTop: 32}}
        type="submit"
        label="Создать"/>
      <RaisedButton
        label="Вернуться"
        disabled={false}
        onTouchTap={() => { actions.navigateToHackathonIndexPath() }}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonNew)
