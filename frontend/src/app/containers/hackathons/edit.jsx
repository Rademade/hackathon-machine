import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle, FormsyDate, FormsySelect} from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import * as authActions from 'actions/auth'
import MenuItem from 'material-ui/MenuItem';

const styles = {
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20,
    marginTop: 100
  },
  switchStyle: {
    marginTop: 10,
    marginBottom: 16
  },
  submitStyle: {
    marginTop: 32,
  }
}

const urlError = 'Некоррекная ссылка'

const mapStateToProps = (state, ownProps) => ({
  state: state.auth
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(authActions, dispatch)
})

const speakers = [
  {
    id: 1,
    full_name: 'Я'
  },
  {
    id: 2,
    full_name: 'Он'
  },
  {
    id: 3,
    full_name: 'Ты'
  }
]

const topics = [
  {
    id: 1,
    title: 'React'
  },
  {
    id: 2,
    title: 'Go'
  },
  {
    id: 3,
    title: 'Ruby'
  }
]

const HackathonEdit = ({state, actions}) => (
  <Paper style={styles.paperStyle}>
    <Formsy.Form>
      <h2>Редактирование хакатона</h2>
      <FormsySelect
        name="topic"
        required
        floatingLabelText="Тема хакатона"
      >
        {topics.map(topic=><MenuItem key={topic.id} value={topic.id} primaryText={topic.title} />)}
      </FormsySelect>
      <FormsyDate
        name="date"
        required
        floatingLabelText="Дата проведения"
      />
      <FormsySelect
        name="speaker"
        required
        floatingLabelText="Кто делает доклад?"
      >
        {speakers.map(speaker=><MenuItem key={speaker.id} value={speaker.id} primaryText={speaker.full_name} />)}
      </FormsySelect>
      <FormsyToggle
              name="toggle"
              label="Проведен?"
              style={styles.switchStyle}
            />
      <FormsyText
              name="url"
              validations="isUrl"
              validationError={urlError}
              required
              hintText="http://www.example.com"
              floatingLabelText="Ссылка на материалы"
              updateImmediately
            />
      <RaisedButton
        style={styles.submitStyle}
        type="submit"
        label="Изменить"
      />
      <RaisedButton
              label="Не менять"
              disabled={false}
            />
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonEdit)
