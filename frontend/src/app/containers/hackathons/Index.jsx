import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, Paper
} from 'material-ui';
import Formsy from 'formsy-react';
import { FormsyText, FormsyToggle } from 'formsy-material-ui/lib';
import IconButton from 'material-ui/IconButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import NewButton from 'components/buttons/NewButton';
import hackathonActions from 'actions/hackathon';
import navigationActions from 'actions/navigation';
import moment from 'moment';

const styles = {
  paper: {
    width: '100%',
    padding: 20
  },
  title: {
    paddingTop: 0,
    marginBottom: 0
  }
};

const HackathonTableHeaderRow = () => (
  <TableRow>
    <TableHeaderColumn>Topic</TableHeaderColumn>
    <TableHeaderColumn>Date</TableHeaderColumn>
    <TableHeaderColumn>Rapporteur</TableHeaderColumn>
    <TableHeaderColumn>Status</TableHeaderColumn>
    <TableHeaderColumn>
      Actions
    </TableHeaderColumn>
  </TableRow>
);

const HackathonTableBodyRow = ({hackathon, actions}) => (
  <TableRow>
    <TableRowColumn>{hackathon.topic ? hackathon.topic.name : ''}</TableRowColumn>
    <TableRowColumn>{moment(hackathon.date).format('DD MMMM YYYY')}</TableRowColumn>
    <TableRowColumn>{hackathon.speaker ? hackathon.speaker.full_name : ''}</TableRowColumn>
    <TableRowColumn>{hackathon.is_done
      ? (<span>Сonducted, <a href={hackathon.materials} target="_blank">materials link</a></span>)
      : 'Not conducted yet'}
    </TableRowColumn>
    <TableRowColumn>
      <IconButton>
        <EditorModeEdit
          onTouchTap={() => {
            actions.navigation.goToHackathonsEdit(hackathon.id)
          }}/>
      </IconButton>
      <IconButton>
        <ActionDeleteForever
          onTouchTap={() => {
            actions.hackathon.delete(hackathon.id)
          }}/>
      </IconButton>
    </TableRowColumn>
  </TableRow>
);

const HackathonTable = ({state, actions}) => (
  <Table fixedHeader={true} height={'350px'}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <HackathonTableHeaderRow/>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {state.hackathonApp.hackathons.map(hackathon =>
        <HackathonTableBodyRow
          key={hackathon.id}
          hackathon={hackathon}
          actions={actions}/>
      )}
    </TableBody>
  </Table>
);

const mapStateToProps = (state, ownProps) => ({
  state
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    hackathon: bindActionCreators(hackathonActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.hackathon.query());

  return {
    actions: actions
  };
}

const HackathonIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Hackathons:</h2>
    {state.hackathonApp.error
      ? <h2>{state.hackathonApp.error}</h2>
      : <div>
          <HackathonTable state={state} actions={actions}/>
          <NewButton onTouchTap={actions.navigation.goToHackathonsNew}/>
        </div>}
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonIndex);
