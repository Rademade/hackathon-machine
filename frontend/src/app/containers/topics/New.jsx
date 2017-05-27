import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import { Paper } from 'material-ui';
import SubmitButton from 'components/buttons/SubmitButton';
import CancelButton from 'components/buttons/CancelButton';
import topicActions from 'actions/topic';
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    topic: bindActionCreators(topicActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }
});

const TopicNew = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={actions.topic.create}>
      <h2 style={styles.title}>New Topic</h2>
      <FormsyText
        name="name"
        type="text"
        validationError={'This is not a valid topic'}
        hintText="What is your topic?"
        floatingLabelText="Topic"
        multiLine={true}
        rows={3}
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
