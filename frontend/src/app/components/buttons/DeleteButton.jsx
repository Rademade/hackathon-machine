import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';

const mapStateToProps = (state, ownProps) => ({
  state: ownProps
});

const style = {
  marginTop: 0
};

const DeleteButton = ({state}) => (
  <FlatButton
    label='Delete'
    secondary={true}
    onTouchTap={state.onTouchTap}
    style={style}/>
);

DeleteButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps
)(DeleteButton);
