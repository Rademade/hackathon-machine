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
      <FormsySelect
      name="topic_id"
      value={state.hackathonApp.hackathon ? state.hackathonApp.hackathon.topic.id : null}
      floatingLabelText="Topic"
      fullWidth={true}>
        {state.topicApp.topics.map(topic =>
          <MenuItem
            key={topic.id}
            value={topic.id}
            primaryText={topic.name}/>)}
      </FormsySelect>
      <FormsyDate
        name="date"
        value={state.hackathonApp.hackathon ? state.hackathonApp.hackathon.held_at : null}
        floatingLabelText="Conduction date"
        fullWidth={true}
        required/>
      <FormsySelect
        name="speaker_id"
        value={state.speakerApp.speaker ? state.speakerApp.speaker.id : null}
        floatingLabelText="Speaker"
        fullWidth={true}>
        {state.speakerApp.speakers.map(speaker =>
          <MenuItem
            key={speaker.id}
            value={speaker.id}
            primaryText={speaker.full_name}/>)}
      </FormsySelect>
      <FormsyToggle
        name="toggle"
        label="Conducted?"
        value={state.hackathonApp.hackathon ? state.hackathonApp.hackathon.is_done : false}
        style={styles.button}/>
      <FormsyText
        name="url"
        value={state.hackathonApp.hackathon ? state.hackathonApp.hackathon.material : null}
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
