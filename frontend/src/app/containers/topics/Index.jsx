import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn, Paper, Slider
} from 'material-ui';
import * as _ from 'lodash';
import ReactStars from 'react-stars';
import Formsy from 'formsy-react';
import { FormsyText, FormsyToggle } from 'formsy-material-ui/lib';
import IconButton from 'material-ui/IconButton';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

import NewButton from 'components/buttons/NewButton';
import topicActions from 'actions/topic';
import userVoteActions from 'actions/user-vote';
import navigationActions from 'actions/navigation';
import speakerActions from 'actions/speaker';

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

const onChange = (topic, user, actions) => {
  return (value) => {
    const votes = topic.votes || [];
    const vote = _.find(votes, (vote) => vote.user_id === user.id);

    if (vote) {
      actions.userVote.update({ id: vote.id, vote: value }).then(
        (_) => actions.topic.query()
      );
    } else {
      actions.userVote.create({ topic_id: topic.id, vote : value }).then(
        (_) => actions.topic.query()
      );
    }
  }
}

const TopicTableHeaderRow = () => (
  <TableRow>
    <TableHeaderColumn>Name</TableHeaderColumn>
    <TableHeaderColumn>Rating</TableHeaderColumn>
    <TableHeaderColumn>Score</TableHeaderColumn>
    <TableHeaderColumn>Created by</TableHeaderColumn>
    <TableHeaderColumn>
      Actions
    </TableHeaderColumn>
  </TableRow>
);

const round = (num) => Math.round(num * 100) / 100;
const getCreatedBy = (users, id) => {
  let user = _.find(users, (user) => user.id === id);
  return user ? user.full_name : '- - - - -';
}

const TopicTableBodyRow = ({topic, isAdmin, user, users, actions}) => (
  <TableRow>
    <TableRowColumn>{topic.name}</TableRowColumn>
    <TableRowColumn style={{fontWeight: 'bold'}}>{round(topic.average_vote)}</TableRowColumn>
    <TableRowColumn>
      <ReactStars
        count={10}
        value={round(topic.average_vote)}
        char={''}
        color1={'#000'}
        onChange={onChange(topic, user, actions)}
        size={24}
        color2={'#ffd700'}/>
    </TableRowColumn>
    <TableRowColumn>{getCreatedBy(users, topic.creator_id)}</TableRowColumn>
    <TableRowColumn>
      <IconButton>
        <CommunicationComment
          onTouchTap={() => {
            actions.navigation.goToTopicsComments(topic.id)
          }}/>
      </IconButton>
      <IconButton>
        <EditorModeEdit
          onTouchTap={() => {
            actions.navigation.goToTopicsEdit(topic.id)
          }}/>
      </IconButton>
      <IconButton>
        <ActionDeleteForever
          onTouchTap={() => {
            actions.topic.delete(topic.id)
          }}/>
      </IconButton>
    </TableRowColumn>
  </TableRow>
);

const TopicsTable = ({state, actions}) => (
  <Table fixedHeader={true} height={'350px'}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TopicTableHeaderRow/>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {state.topicApp.topics.map(topic =>
        <TopicTableBodyRow
          key={topic.id}
          topic={topic}
          user={state.authApp.user}
          users={state.speakerApp.speakers}
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
    topic: bindActionCreators(topicActions, dispatch),
    userVote: bindActionCreators(userVoteActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch),
    speaker: bindActionCreators(speakerActions, dispatch)
  }

  dispatch(actions.topic.query());
  dispatch(actions.speaker.query());

  return {
    actions: actions
  };
}

const TopicIndex = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Topics:</h2>
    {state.topicApp.error
      ? <h2>{state.topicApp.error}</h2>
      : <div>
          <TopicsTable state={state} actions={actions}/>
          <NewButton onTouchTap={actions.navigation.goToTopicsNew}/>
        </div>}
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex);
