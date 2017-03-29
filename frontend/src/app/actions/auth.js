import {push} from 'react-router-redux'
import auth from 'api/auth'
import {
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT
} from 'constants/auth'
import * as _ from 'lodash'

function loginRequestSuccess(user) {
  return {
    type: LOG_IN_REQUEST_SUCCESS,
    payload: {
      user
    }
  }
}

function loginRequestFailure(error) {
  return {
    type: LOG_IN_REQUEST_FAILURE,
    payload: {
      error
    }
  }
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
