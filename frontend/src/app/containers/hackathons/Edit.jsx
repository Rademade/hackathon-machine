import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Formsy from 'formsy-react';
import { FormsyText, FormsyToggle, FormsyDate, FormsySelect } from 'formsy-material-ui/lib';
import { Paper, MenuItem } from 'material-ui';
import SubmitButton from 'components/buttons/SubmitButton';
import CancelButton from 'components/buttons/CancelButton';
import hackathonActions from 'actions/hackathon';
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
  state: Object.assign({}, state, {params: ownProps.params})
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    hackathon: bindActionCreators(hackathonActions, dispatch),
    topic: bindActionCreators(topicActions, dispatch),
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  };

  dispatch(actions.hackathon.get(ownProps.params.id));
  dispatch(actions.topic.query());
  dispatch(actions.speaker.query());

  return {
    actions: actions
  };
}

const onSubmit = (id, actions) => {
  return function (formData) {
    actions.hackathon.update(Object.assign(formData, {
      id: id
    }));
  }
}

const HackathonEdit = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={onSubmit(+state.params.id, actions)}>
      <h2 style={styles.title}>Edit Hackathon</h2>
      {state.hackathonApp.hackathon.topic &&
        <FormsySelect
          name="topic_id"
          value={state.hackathonApp.hackathon.topic_id}
          floatingLabelText="Topic"
          fullWidth={true}>
          {state.topicApp.topics.map(topic =>
            <MenuItem
              key={topic.id}
              value={topic.id}
              primaryText={topic.name}/>)}
      </FormsySelect>}
      <FormsyDate
        name="date"
        value={state.hackathonApp.hackathon.held_at}
        floatingLabelText="Conduction date"
        fullWidth={true}
        required/>
      {state.hackathonApp.hackathon.speaker &&
        <FormsySelect
          name="speaker_id"
          value={state.hackathonApp.hackathon.speaker_id}
          floatingLabelText="Speaker"
          fullWidth={true}>
          {state.speakerApp.speakers.map(speaker =>
            <MenuItem
              key={speaker.id}
              value={speaker.id}
              primaryText={speaker.full_name}/>)}
        </FormsySelect>}
      <FormsyToggle
        name="is_done"
        label="Conducted?"
        value={state.hackathonApp.hackathon.is_done || false}
        style={styles.button}/>
      <FormsyText
        name="materials"
        value={state.hackathonApp.hackathon.materials}
        hintText="http://www.example.com"
        floatingLabelText="Materials link"
        multiLine={true}
        rows={3}
        type={"text"}
        fullWidth={true}/>
      <SubmitButton label={'Save'}/>
      <CancelButton onTouchTap={actions.navigation.goToHackathons}/>
    </Formsy.Form>
  </Paper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackathonEdit);
