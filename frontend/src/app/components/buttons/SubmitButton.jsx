import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

const style = {
  marginTop: 15,
  marginBottom: 25,
  marginRight: 20
};

const mapStateToProps = (state, ownProps) => ({
  state: ownProps
});

const SubmitButton = ({state}) => (
  <RaisedButton
    type="submit"
    label={state.label}
    primary={true}
    style={style}/>
);

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(SubmitButton);
