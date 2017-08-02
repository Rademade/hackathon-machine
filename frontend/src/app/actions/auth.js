import { push } from 'react-router-redux';
import auth from 'api/auth';
import {
  SIGN_UP_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_OUT,
} from 'constants';

export default {
  signUp: (data) => (dispatch) => dispatch({
    type: SIGN_UP_REQUEST,
    payload: {
      data: data
    }
  }),
  signIn: (data) => (dispatch) => dispatch({
    type: SIGN_IN_REQUEST,
    payload: {
      data: data
    }
  }),
  signOut: (_) => (dispatch) => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    dispatch({ type: SIGN_OUT });
    dispatch(push('/auth/sign_in'));
  }
};
