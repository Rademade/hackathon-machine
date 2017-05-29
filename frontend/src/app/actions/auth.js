import { push } from 'react-router-redux';
import auth from 'api/auth';
import {
  LOAD_JWT,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT
} from 'constants';

export default {
  loadJWT: jwt => dispatch => (
    new Promise ((resolve, reject) => {
      dispatch({ type: LOAD_JWT, payload: jwt })
      resolve(jwt)
    }).catch(e => reject(e))
  ),
  logout: () => dispatch => {
    localStorage.removeItem('jwt')
    dispatch({ type: LOG_OUT })
    dispatch(push('/auth'))
  },
  login: data => dispatch => dispatch({
    type: LOG_IN_REQUEST,
    payload: {
      data: data
    }
  })
}
