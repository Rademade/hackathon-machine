import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import { Paper, MenuItem } from 'material-ui';
import SubmitButton from 'components/buttons/SubmitButton';
import CancelButton from 'components/buttons/CancelButton';
import topicActions from 'actions/topic';
import speakerActions from 'actions/speaker';
import navigationActions from 'actions/navigation';

const styles = {
  paper: {
    width: 600,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    paddingTop: 20,
    marginBottom: 0
  }
};

const mapStateToProps = (state, ownProps) => ({
  state
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    topic: bindActionCreators(topicActions, dispatch),
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.speaker.query());

  return {
    actions: actions
  };
};

const TopicNew = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={actions.topic.create}>
      <h2 style={styles.title}>New Topic</h2>
      <FormsyText
        name="name"
        type="text"
        validationError={'This is not a valid name'}
        hintText="What is your topic name?"
        floatingLabelText="Topic"
        fullWidth={true}
        required/>
      <FormsySelect
        name="created_by"
        floatingLabelText="Created by"
        fullWidth={true}
        required>
        {state.speakerApp.speakers.map(speaker =>
          <MenuItem
            key={speaker.id}
            value={speaker.id}
            primaryText={speaker.full_name}/>)}
      </FormsySelect>
      <FormsyText
        name="description"
        type="text"
        validationError={'This is not a valid description'}
        hintText="Want say something?"
        floatingLabelText="Description"
        multiLine={true}
        rows={5}
        fullWidth={true}
        required/>
      <SubmitButton label="Create"/>
      <CancelButton onTouchTap={actions.navigation.goToTopics}/>
    </Formsy.Form>
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicNew);
