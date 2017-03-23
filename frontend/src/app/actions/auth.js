import auth from 'api/auth'
import {
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE
} from 'constants/auth'
import * as _ from 'lodash'

function loginRequest() {
  return {
    type: LOG_IN_REQUEST
  }
}

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

export default {
  login: (credentials) => {
    return dispatch => {
      dispatch(loginRequest())

      return auth.login(credentials).then(
        response => dispatch(loginRequestSuccess(response.data))
      ).catch(
        error => dispatch(loginRequestFailure(error))
      )
    }
  }
}
