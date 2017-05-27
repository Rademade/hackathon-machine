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
    state : Object.assign(state, { params : ownProps.params })
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    topic: bindActionCreators(topicActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.topic.get(ownProps.params.id));

  return {
    actions: actions
  };
}

const onSubmit = (id, actions) => {
  return function (formData) {
    actions.topic.update(Object.assign(formData, { id : id }))
  }
}

const TopicEdit = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={onSubmit(+state.params.id, actions)}>
      <h2 style={styles.title}>Edit Topic</h2>
      <FormsyText
        name="name"
        type="text"
        validationError={'This is not a valid topic'}
        hintText="What is your topic?"
        floatingLabelText="Topic"
        value={state.topicApp.topic ? state.topicApp.topic.name : ''}
        fullWidth={true}
        required/>
      <FormsyText
        name="created_by"
        type="text"
        validationError={'This is not a valid topic'}
        hintText="Who is topic creator?"
        floatingLabelText="Created by"
        value={state.topicApp.topic ? state.topicApp.topic.created_by : ''}
        fullWidth={true}
        required/>
      <SubmitButton label={'Save'}/>
      <CancelButton onTouchTap={actions.navigation.goToTopics}/>
    </Formsy.Form>
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicEdit);
