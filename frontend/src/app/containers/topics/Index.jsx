import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, Paper, Slider
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import NewButton from 'components/buttons/NewButton'
import EditButton from 'components/buttons/EditButton'
import DeleteButton from 'components/buttons/DeleteButton'
import topicActions from 'actions/topic'
import userVoteActions from 'actions/user-vote'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: '100%',
    padding: 20
  },
  title: {
    paddingTop: 0,
    marginBottom: 0
  },
  slider: {
    height: 40
  }
}

const onChange = (id, userVote, actions) => {
  return function (event, value) {
    if (userVote) {
      actions.userVote.update({ vote: value }, { id: userVote.id })
    } else {
      actions.userVote.create({ topic_id : id, vote : value })
    }
  }
}

const TopicTableHeaderRow = () => (
  <TableRow>
    <TableHeaderColumn>Name</TableHeaderColumn>
    <TableHeaderColumn>Rating</TableHeaderColumn>
    <TableHeaderColumn>Score</TableHeaderColumn>
    <TableHeaderColumn>
      Actions
    </TableHeaderColumn>
  </TableRow>
)

const TopicTableBodyRow = ({topic, actions}) => (
  <TableRow>
    <TableRowColumn>{topic.name}</TableRowColumn>
    <TableRowColumn>{topic.average_vote}</TableRowColumn>
    <TableRowColumn>
      <Slider
        min={1}
        max={5}
        step={1}
        value={topic.userVote ? topic.userVote.vote : 1}
        onChange={onChange(topic.id, topic.userVote, actions)}
        style={styles.slider}/>
    </TableRowColumn>
    <TableRowColumn>
      <EditButton onTouchTap={() => {
        actions.navigation.goToTopicsEdit(topic.id)
      }}/>
      <DeleteButton onTouchTap={() => {
        actions.topic.delete(topic.id)
      }}/>
    </TableRowColumn>
  </TableRow>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    topic: bindActionCreators(topicActions, dispatch),
    userVote: bindActionCreators(userVoteActions, dispatch),
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
        <TopicTableHeaderRow/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.topicApp.topics.map(topic =>
          <TopicTableBodyRow
            key={topic.id}
            topic={topic}
            actions={actions}/>
        )}
      </TableBody>
    </Table>
    <NewButton onTouchTap={actions.navigation.goToTopicsNew}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex);
