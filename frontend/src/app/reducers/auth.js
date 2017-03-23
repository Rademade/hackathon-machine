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
    isLoggedIn: false
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
          isLoggedIn: true
        }
      }
    case LOG_IN_REQUEST_FAILURE:
      browserHistory.push('/login')

      return {
        ...state,
        isPendingRequest: false,
        error: action.payload.error,
        user: {
          ...state.user,
          isLoggedIn: false
        }
      }
    default:
      return state
  }
}
