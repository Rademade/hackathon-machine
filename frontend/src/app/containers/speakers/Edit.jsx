import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText} from 'formsy-material-ui/lib'
import {Paper} from 'material-ui'
import SubmitButton from 'components/buttons/SubmitButton'
import CancelButton from 'components/buttons/CancelButton'
import speakerActions from 'actions/speaker'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: 300,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    paddingTop: 20,
    marginBottom: 0
  }
}

const mapStateToProps = (state, ownProps) => ({
  state : Object.assign(state, { params : ownProps.params })
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let actions = {
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }

  dispatch(actions.speaker.get(ownProps.params.id))

  return {
    actions: actions
  }
}

const onSubmit = (id, actions) => {
  return function (formData) {
    actions.speaker.update(Object.assign(formData, { id : id }))
  }
}

const SpeakerEdit = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={onSubmit(state.params.id - 0, actions)}>
      <h2 style={styles.title}>Edit Speaker</h2>
      <FormsyText
        name="full_name"
        type="text"
        hintText="What is him name?"
        floatingLabelText="Full Name"
        inputStyle={styles.hideAutoFillColorStyle}
        value={state.speakerApp.speaker ? state.speakerApp.speaker.full_name : ''}
        required/>
      <FormsyText
        name="email"
        type="email"
        hintText="What is him email?"
        floatingLabelText="Email"
        inputStyle={styles.hideAutoFillColorStyle}
        value={state.speakerApp.speaker ? state.speakerApp.speaker.email : ''}
        required/>
      <SubmitButton label="Save"/>
      <CancelButton onTouchTap={actions.navigation.goToSpeakers}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakerEdit)
