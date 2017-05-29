import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import { Paper } from 'material-ui';
import SubmitButton from 'components/buttons/SubmitButton';
import CancelButton from 'components/buttons/CancelButton';
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }
});

const SpeakerNew = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={actions.speaker.create}>
      <h2 style={styles.title}>New Speaker</h2>
      <FormsyText
        name="full_name"
        type="text"
        hintText="What is him name?"
        floatingLabelText="Full Name"
        fullWidth={true}
        required/>
      <FormsyText
        name="email"
        type="email"
        hintText="What is him email?"
        floatingLabelText="Email"
        fullWidth={true}
        required/>
      <SubmitButton label="Create"/>
      <CancelButton onTouchTap={actions.navigation.goToSpeakers}/>
    </Formsy.Form>
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakerNew);
