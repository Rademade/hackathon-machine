import {browserHistory} from 'react-router'
import {
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE
} from 'constants/auth'

const initialState = {
  isPendingRequest: false,
  user: {
    email: null,
    isLogged: false
  }
}

export function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isPendingRequest: true
      }
    case LOG_IN_REQUEST_SUCCESS:
      browserHistory.push('/')

      return {
        ...state,
        isPendingRequest: false,
        user: {
          ...state.user,
          isLogged: true
        }
      }
    case LOG_IN_REQUEST_FAILURE:
      browserHistory.push('/sign-in')

      return {
        ...state,
        isPendingRequest: false,
        error: action.payload.error,
        user: {
          ...state.user,
          isLogged: false
        }
      }
    default:
      return state
  }
}
