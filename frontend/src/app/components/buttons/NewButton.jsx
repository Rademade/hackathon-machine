import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {RaisedButton} from 'material-ui'

const mapStateToProps = (state, ownProps) => ({
  state: ownProps
})

const style = {
  marginTop: 20
}

const NewButton = ({state}) => (
  <RaisedButton
    label='New'
    primary={true}
    onTouchTap={state.onTouchTap}
    style={style}/>
)

NewButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps
)(NewButton)
