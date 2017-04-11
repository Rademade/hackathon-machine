import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Formsy from 'formsy-react'
import {FormsyText} from 'formsy-material-ui/lib'
import {Paper, RaisedButton, FlatButton} from 'material-ui'
import topicActions from 'actions/topic'
import navigationActions from 'actions/navigation'

const styles = {
  paper: {
    width: 300,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    marginTop: 15,
    marginBottom: 25,
    marginRight: 20
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
    topic: bindActionCreators(topicActions, dispatch),
    navigation: bindActionCreators(navigationActions, dispatch)
  }
})

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
        inputStyle={styles.hideAutoFillColorStyle}
        required/>
      <RaisedButton
        type="submit"
        label="Create"
        primary={true}
        style={styles.button}/>
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={actions.navigation.goToTopics}
        style={styles.button}/>
    </Formsy.Form>
  </Paper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicNew)
