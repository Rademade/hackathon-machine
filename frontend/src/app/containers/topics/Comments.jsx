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
    state : Object.assign(state, { params : ownProps.params })
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    topic: bindActionCreators(topicActions, dispatch),
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.topic.get(ownProps.params.id));
  dispatch(actions.speaker.query());

  return {
    actions: actions
  };
}

const onSubmit = (id, actions) => {
  return function (formData) {
    actions.topic.update(Object.assign(formData, { id : id }))
  }
}

const Comments = ({state, actions}) => (
  <Paper style={styles.paper}>
    <h2 style={styles.title}>Comments:</h2>
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
