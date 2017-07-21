import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar, FlatButton } from 'material-ui';
import auth from 'actions/auth';
import navigation from 'actions/navigation';

const mapStateToProps = (state, ownProps) => ({
  state: state.authApp
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    navigation: bindActionCreators(navigation, dispatch)
  }
});

const Header = ({state, actions}) => (
  <AppBar
    title={<span style={{cursor: 'pointer'}}>Hackathon Machine</span>}
    onTitleTouchTap={actions.goToRoot}
    onLeftIconButtonTouchTap={actions.navigation.goToRoot}
    iconElementRight={
      state.isAuthenticated
        ? <FlatButton label="Logout" onTouchTap={actions.auth.signOut}/>
        : null
    }>
  </AppBar>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
