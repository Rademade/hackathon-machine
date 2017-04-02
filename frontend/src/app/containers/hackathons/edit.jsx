import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle, FormsyDate, FormsySelect} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import * as hackathonActions from 'actions/hackathon'
import MenuItem from 'material-ui/MenuItem';

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
  state: state.hackathonApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(hackathonActions, dispatch)
})

const HackathonEdit = ({state, actions}) => (
  <Paper style={paperStyle}>
    <Formsy.Form>
      <h2>Редактирование хакатона</h2>
      <TopicSelect topics={state.topics}/>
      <FormsyDate
        name="date"
        floatingLabelText="Дата проведения"
        required/>
      <SpeakerSelect speakers={state.speakers}/>
      <FormsyToggle
        name="toggle"
        label="Проведен?"
        style={{marginTop: 10, marginBottom: 16}}/>
      <FormsyText
        name="url"
        validations="isUrl"
        validationError={'Некоррекная ссылка'}
        hintText="http://www.example.com"
        floatingLabelText="Ссылка на материалы"
        updateImmediately/>
      <RaisedButton
        style={{marginTop: 32}}
        type="submit"
        label="Изменить"/>
      <RaisedButton
        label="Не менять"
        disabled={false}
        onTouchTap={() => { actions.navigateToHackathonIndexPath() }}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonEdit)
