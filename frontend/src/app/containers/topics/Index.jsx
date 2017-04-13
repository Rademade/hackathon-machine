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

const TopicTableBodyRow = ({topic, isAdmin, actions}) => (
  <TableRow>
    <TableRowColumn>{topic.title}</TableRowColumn>
    <TableRowColumn>{topic.rating}</TableRowColumn>
    <TableRowColumn>
      <Slider
        min={0}
        max={100}
        step={10}
        defaultValue={50}
        value={topic.rating}
        onChange={(event, value) => {
          actions.topic.update(Object.assign(topic, {rating: value}))
        }}
        style={styles.slider}/>
    </TableRowColumn>
    {isAdmin &&
      <TableRowColumn>
        <EditButton onTouchTap={() => {
          actions.navigation.goToTopicsEdit(topic.id)
        }}/>
        <DeleteButton onTouchTap={() => {
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
    <NewButton onTouchTap={actions.navigation.goToTopicsNew}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
