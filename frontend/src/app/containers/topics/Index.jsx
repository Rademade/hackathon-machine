import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, FlatButton, Paper, RaisedButton, Slider
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: '40%',
    padding: 20
  },
  button: {
    marginTop: 20
  },
  title: {
    paddingTop: 0,
    marginBottom: 0
  }
}

const NewTopicButton = ({action}) => (
  <RaisedButton
    label='New Topic'
    primary={true}
    style={styles.button}
    onTouchTap={action}/>
)

const TopicTableHeaderRow = () => (
  <TableRow>
    <TableHeaderColumn>Name</TableHeaderColumn>
    <TableHeaderColumn>Rating</TableHeaderColumn>
    <TableHeaderColumn>Score</TableHeaderColumn>
  </TableRow>
)

const TopicTableBodyRow = ({topic}) => (
  <TableRow>
    <TableRowColumn>{topic.title}</TableRowColumn>
    <TableRowColumn>{topic.rating}</TableRowColumn>
    <TableRowColumn>
      <Slider
        min={0}
        max={5}
        step={1}
        defaultValue={1}
        value={2}/>
    </TableRowColumn>
  </TableRow>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(navigationActions, dispatch)
})

const TopicIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Topics</h2>
    <Table fixedHeader={true} height={'350px'}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TopicTableHeaderRow isAuthorized={true}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.topicApp.topics.map(topic =>
          <TopicTableBodyRow key={topic.id} topic={topic}/>
        )}
      </TableBody>
    </Table>
    <NewTopicButton action={actions.goToTopicsNew}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
