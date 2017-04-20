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
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    speaker: bindActionCreators(speakerActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }
})

const SpeakerEdit = ({state, actions}) => (
  <Paper style={styles.paper}>
    <Formsy.Form onSubmit={model => actions.speaker.update(Object.assign(model, {id: state.params.id}))}>
      <h2 style={styles.title}>Edit Speaker</h2>
      <FormsyText
        name="full_name"
        type="text"
        hintText="What is him name?"
        floatingLabelText="Full Name"
        inputStyle={styles.hideAutoFillColorStyle}
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
