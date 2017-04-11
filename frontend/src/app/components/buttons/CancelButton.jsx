import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {FlatButton} from 'material-ui'

const mapStateToProps = (state, ownProps) => ({
  state: ownProps
})

const style = {
  marginTop: 15,
  marginBottom: 25,
  marginRight: 20
}

const CancelButton = ({state}) => (
  <FlatButton
    label="Cancel"
    secondary={true}
    onTouchTap={state.onTouchTap}
    style={style}/>
)

CancelButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps
)(CancelButton)
