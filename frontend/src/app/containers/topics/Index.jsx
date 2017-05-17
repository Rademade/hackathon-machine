import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, Paper, Slider
} from 'material-ui'
import ReactStars from 'react-stars'
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
  return function (value) {
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

const TopicTableBodyRow = ({topic, isAdmin, actions}) => (
  <TableRow>
    <TableRowColumn>{topic.name}</TableRowColumn>
    <TableRowColumn>{topic.average_vote}</TableRowColumn>
    <TableRowColumn>
      <ReactStars count={5} onChange={onChange(topic.id, topic.userVote, actions)} size={24} color2={'#ffd700'} />
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
