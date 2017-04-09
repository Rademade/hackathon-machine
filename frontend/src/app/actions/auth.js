import {push} from 'react-router-redux'
import auth from 'api/auth'
import {
  LOAD_JWT,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT,
  ENABLE_LOGIN_BUTTON,
  DISABLE_LOGIN_BUTTON
} from 'constants/auth'

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
  login: (credentials) => dispatch => {
    dispatch({ type: LOG_IN_REQUEST })

    return auth.login(credentials).then(
      response => dispatch({
        type: LOG_IN_REQUEST_SUCCESS,
        payload: response.data
      })
    ).catch(
      error => dispatch({
        type: LOG_IN_REQUEST_FAILURE,
        payload: error
      })
    )
  },
  enableLoginButton: () => dispatch => dispatch({ type: ENABLE_LOGIN_BUTTON }),
  disableLoginButton: () => dispatch => dispatch({ type: DISABLE_LOGIN_BUTTON })
}
