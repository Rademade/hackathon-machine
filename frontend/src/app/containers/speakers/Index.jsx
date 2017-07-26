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
import speakerActions from 'actions/speaker';
import navigationActions from 'actions/navigation';

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
};

const TopicTableHeaderRow = ({isAdmin}) => (
  <TableRow>
    <TableHeaderColumn>Full Name</TableHeaderColumn>
    {isAdmin &&
      <TableHeaderColumn>
        Actions
      </TableHeaderColumn>
    }
  </TableRow>
);

const TopicTableBodyRow = ({speaker, editable, removable, actions}) => (
  <TableRow>
    <TableRowColumn>{speaker.full_name}</TableRowColumn>
    <TableRowColumn>
    {editable &&
      <IconButton>
        <EditorModeEdit
          onTouchTap={() => {
            actions.navigation.goToSpeakersEdit(speaker.id)
          }}/>
      </IconButton>
    }
    {removable &&
      <IconButton>
        <ActionDeleteForever
          onTouchTap={() => {
            actions.speaker.delete(speaker.id)
          }}/>
      </IconButton>
    }
    </TableRowColumn>
  </TableRow>
);

const SpeakerTable = ({state, actions}) => (
  <Table fixedHeader={true} height={'350px'}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TopicTableHeaderRow isAdmin={state.authApp.user.is_admin}/>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {state.speakerApp.speakers.map(speaker =>
        <TopicTableBodyRow
          key={speaker.id}
          speaker={speaker}
          editable={state.authApp.user.is_admin || state.authApp.user.id == speaker.id}
          removable={state.authApp.user.is_admin}
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
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.speaker.query());

  return {
    actions: actions
  };
}

const SpeakerIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Speakers:</h2>
    {state.speakerApp.error
      ? <h2>{state.speakerApp.error}</h2>
      : <div>
          <SpeakerTable state={state} actions={actions}/>
          {state.authApp.user.is_admin &&
            <NewButton onTouchTap={actions.navigation.goToSpeakersNew}/>
          }
        </div>}
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakerIndex);
