import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, Paper
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import NewButton from 'components/buttons/NewButton'
import EditButton from 'components/buttons/EditButton'
import DeleteButton from 'components/buttons/DeleteButton'
import speakerActions from 'actions/speaker'
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
    <TableHeaderColumn>Full Name</TableHeaderColumn>
    {isAdmin &&
      <TableHeaderColumn>
        Actions
      </TableHeaderColumn>
    }
  </TableRow>
)

const TopicTableBodyRow = ({speaker, isAdmin, actions}) => (
  <TableRow>
    <TableRowColumn>{speaker.full_name}</TableRowColumn>
    {isAdmin &&
      <TableRowColumn>
        <EditButton onTouchTap={() => {
          actions.navigation.goToSpeakersEdit(speaker.id)
        }}/>
        <DeleteButton onTouchTap={() => {
          actions.speaker.delete(speaker.id)
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
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.speaker.query())

  return {
    actions: actions
  }
}

const SpeakerIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Speakers</h2>
    <Table fixedHeader={true} height={'350px'}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TopicTableHeaderRow isAdmin={state.authApp.isAdmin}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.speakerApp.speakers.map(speaker =>
          <TopicTableBodyRow
            key={speaker.id}
            speaker={speaker}
            isAdmin={state.authApp.isAdmin}
            actions={actions}/>
        )}
      </TableBody>
    </Table>
    <NewButton onTouchTap={actions.navigation.goToSpeakersNew}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakerIndex)
