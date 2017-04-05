import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, FlatButton, Paper, RaisedButton, Slider, Dialog, TextField
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import * as hackathonActions from 'actions/hackathon'


const paperStyle = {
  margin: 'auto',
  padding: 20,
  marginTop: 20
}

const TopicTableHeaderRow = ({isAuthorized}) => (
  <TableRow>
    <TableHeaderColumn>Название</TableHeaderColumn>
    {isAuthorized && <TableHeaderColumn>Оценка</TableHeaderColumn>}
    <TableHeaderColumn>Рейтинг</TableHeaderColumn>
  </TableRow>
)

const NewTopicDialogActions = () => {
  return [
      <FlatButton
        label="Отмена"
        primary={false}
      />
      ,
      <FlatButton
        label="Предложить"
        primary={true}
      />
    ]
}

const NewTopicDialog = ({state}) => {
  return <Dialog
          contentStyle={{maxWidth: 400}}
          title="Новая тема"
          actions={NewTopicDialogActions()}
          modal={false}
          open={true}
        >
          <TextField
            style={{width: '100%'}}
            hintText="Название темы"
            required
          />
        </Dialog>
}


const TopicVote = ({topic, state}) => {
  return <div style={{width:'100%'}}>
          <Slider
            sliderStyle={ {maxWidth:'50%', display: 'inline-block' }}
            min={0}
            max={5}
            step={1}
            defaultValue={topic.currentUserVote}
            value={topic.currentUserVote}
          />
          <FlatButton style={{display: 'inline-block', maxWidth:'50%'}} label={'Проголосовать - '+topic.currentUserVote}/>
        </div>
}

const TopicTableBodyRow = ({topic, isAuthorized}) => (
  <TableRow>
    <TableRowColumn>{topic.title}</TableRowColumn>
    {isAuthorized && <TableRowColumn><TopicVote topic={topic}/></TableRowColumn>}
    <TableRowColumn>{topic.raitng}</TableRowColumn>
  </TableRow>
)

const CreateTopicButton = () => {
    return <RaisedButton
      label='Предложить тему'
      primary={true}
      style={{marginTop: 50}}
      onTouchTap={() => { console.log('Open modal there') }}/>
}

const mapStateToProps = (state, ownProps) => ({
  state: state.topicApp,
  authState: state.authApp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(hackathonActions, dispatch)
})

const TopicIndex = ({state, actions, authState}) => (
  <Paper style={paperStyle}>
    <h2>Темы хакатонов</h2>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TopicTableHeaderRow isAuthorized={true}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.topics.map(topic =>
          <TopicTableBodyRow isAuthorized={true} key={topic.id} topic={topic}/>
        )}
      </TableBody>
    </Table>
    <NewTopicDialog state={state}/>
    <CreateTopicButton/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
