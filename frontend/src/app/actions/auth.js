import axios from 'axios'
import {API_ENDPOINT} from 'constants/common'
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
  login: (user) => {
    return dispatch => {
      dispatch(loginRequest())

      return axios.post(
        `${API_ENDPOINT}/auth/login`, user
      ).then(
        response => dispatch(loginRequestSuccess(response.data))
      ).catch(
        error => dispatch(loginRequestFailure(error))
      )
    }
  }
}
