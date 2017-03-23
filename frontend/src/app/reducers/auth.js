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

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isPendingRequest: true
      }
    case LOG_IN_REQUEST_SUCCESS:
      return {
        ...state,
        isPendingRequest: false,
        user: {
          ...state.user,
          isLoggedIn: true
        }
      }
    case LOG_IN_REQUEST_FAILURE:
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
