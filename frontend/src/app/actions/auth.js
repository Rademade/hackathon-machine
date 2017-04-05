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

function loginRequestSuccess(user) {
  return {
    type: LOG_IN_REQUEST_SUCCESS,
    payload: user
  }
}

function loginRequestFailure(error) {
  return {
    type: LOG_IN_REQUEST_FAILURE,
    payload: error
  }
}

export function loadJWT(jwt) {
  return dispatch => new Promise ((resolve, reject) => {
    dispatch({ type: LOAD_JWT, payload: jwt })
    resolve(jwt)
  }).catch(e => reject(e))
}

export function enableLoginButton() {
  return dispatch => dispatch({ type: ENABLE_LOGIN_BUTTON })
}

export function disableLoginButton() {
  return dispatch => dispatch({ type: DISABLE_LOGIN_BUTTON })
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem('jwt')
    dispatch(push('/auth'))
    dispatch({ type: LOG_OUT })
  }
}

export function login(credentials) {
  return dispatch => {
    dispatch({ type: LOG_IN_REQUEST })

    return auth.login(credentials).then(
      response => dispatch(loginRequestSuccess(response.data))
    ).catch(
      error => dispatch(loginRequestFailure(error))
    )
  }
}
