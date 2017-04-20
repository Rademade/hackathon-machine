import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {FlatButton} from 'material-ui'

const mapStateToProps = (state, ownProps) => ({
  state: ownProps
})

const style = {
  marginTop: 0
}

const EditButton = ({state}) => (
  <FlatButton
    label='Edit'
    primary={true}
    onTouchTap={state.onTouchTap}
    style={style}/>
)

EditButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps
)(EditButton)
