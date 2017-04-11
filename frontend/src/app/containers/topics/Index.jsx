import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, FlatButton, Paper, RaisedButton, Slider
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import topicActions from 'actions/topic'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: '100%',
    padding: 20
  },
  button: {
    marginTop: 20
  },
  title: {
    paddingTop: 0,
    marginBottom: 0
  },
  slider: {
    height: 40
  }
}

const NewTopicButton = ({action}) => (
  <RaisedButton
    label='New Topic'
    primary={true}
    style={styles.button}
    onTouchTap={action}/>
)

const EditTopicButton = ({action}) => (
  <FlatButton
    label='Edit'
    primary={true}
    onTouchTap={action}/>
)

const DeleteTopicButton = ({action}) => (
  <FlatButton
    label='Delete'
    secondary={true}
    onTouchTap={action}/>
)

const TopicTableHeaderRow = ({isAdmin}) => (
  <TableRow>
    <TableHeaderColumn>Name</TableHeaderColumn>
    <TableHeaderColumn>Rating</TableHeaderColumn>
    <TableHeaderColumn>Score</TableHeaderColumn>
    {isAdmin &&
      <TableHeaderColumn>
        Actions
      </TableHeaderColumn>
    }
  </TableRow>
)

const TopicTableBodyRow = ({topic, isAdmin}) => (
  <TableRow>
    <TableRowColumn>{topic.title}</TableRowColumn>
    <TableRowColumn>{topic.rating}</TableRowColumn>
    <TableRowColumn>
      <Slider
        min={0}
        max={100}
        step={1}
        defaultValue={50}
        value={topic.rating}
        style={styles.slider}/>
    </TableRowColumn>
    {isAdmin &&
      <TableRowColumn>
        <EditTopicButton action={() => {
          actions.navigation.goToTopicsEdit(topic.id)
        }}/>
        <DeleteTopicButton action={() => {
          actions.topic.delete(topic.id)
        }}/>
      </TableRowColumn>
    }
  </TableRow>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    topic: bindActionCreators(topicActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.topic.query())

  return {
    actions: actions
  }
}

const TopicIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Topics</h2>
    <Table fixedHeader={true} height={'350px'}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TopicTableHeaderRow isAdmin={state.authApp.isAdmin}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.topicApp.topics.map(topic =>
          <TopicTableBodyRow
            key={topic.id}
            topic={topic}
            isAdmin={state.authApp.isAdmin}
            actions={actions}/>
        )}
      </TableBody>
    </Table>
    <NewTopicButton action={actions.navigation.goToTopicsNew}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
