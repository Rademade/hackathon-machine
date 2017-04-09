import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, FlatButton, Paper, RaisedButton
} from 'material-ui'
import Formsy from 'formsy-react'
import {FormsyText, FormsyToggle} from 'formsy-material-ui/lib'
import {HACKATHONS_REQUEST} from 'constants/hackathon'
import hackathonActions from 'actions/hackathon'
import navigationActions from 'actions/navigation'
import moment from 'moment'

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
  }
}
const HackathonsNewButton = ({isAdmin, action}) => (
  isAdmin
    ? <RaisedButton
        label='Add new'
        primary={true}
        style={styles.button}
        onTouchTap={action}/>
    : null
)

const HackathonsEditButton = ({action}) => (
  <FlatButton
    label='Edit'
    primary={true}
    onTouchTap={action}/>
)

const HackathonsDeleteButton = ({action}) => (
  <FlatButton
    label='Delete'
    secondary={true}
    onTouchTap={action}/>
)

const HackathonTableHeaderRow = ({isAdmin}) => (
  <TableRow>
    <TableHeaderColumn>Topic</TableHeaderColumn>
    <TableHeaderColumn>Date</TableHeaderColumn>
    <TableHeaderColumn>Rapporteur</TableHeaderColumn>
    <TableHeaderColumn>Status</TableHeaderColumn>
    {isAdmin && <TableHeaderColumn>Actions</TableHeaderColumn>}
  </TableRow>
)

const HackathonTableBodyRow = ({hackathon, isAdmin, actions}) => (
  <TableRow>
    <TableRowColumn>{hackathon.topic}</TableRowColumn>
    <TableRowColumn>{moment(hackathon.date).format('DD MMMM YYYY')}</TableRowColumn>
    <TableRowColumn>{hackathon.speaker}</TableRowColumn>
    <TableRowColumn>{hackathon.is_done
      ? (<span>Сonducted, materials: <a href={hackathon.materials_link} target="_blank">link</a></span>)
      : 'Not conducted yet'}
    </TableRowColumn>
    {isAdmin &&
      <TableRowColumn>
        <HackathonsEditButton action={() => {
          actions.goToHackathonsEdit(hackathon.id)
        }}/>
        <HackathonsDeleteButton action={() => {
          actions.hackathonDelete(hackathon.id)
        }}/>
      </TableRowColumn>
    }
  </TableRow>
)

const mapStateToProps = (state, ownProps) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch({type: HACKATHONS_REQUEST})

  return {
    actions: bindActionCreators(Object.assign({}, hackathonActions, navigationActions), dispatch)
  }
}

const HackathonIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Hackathons</h2>
    <Table fixedHeader={true} height={'350px'}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <HackathonTableHeaderRow isAdmin={state.authApp.isAdmin}/>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {state.hackathonApp.hackathons.map(hackathon =>
          <HackathonTableBodyRow
            key={hackathon.id}
            hackathon={hackathon}
            isAdmin={state.authApp.isAdmin}
            actions={actions}/>
        )}
      </TableBody>
    </Table>
    <HackathonsNewButton isAdmin={state.authApp.isAdmin} action={actions.goToHackathonsNew}/>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonIndex)
