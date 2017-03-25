import {browserHistory} from 'react-router'
import {
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT,
  TOGGLE
} from 'constants/auth'
import initialState from 'store/initial-state'

export default function authReducer(state = initialState.auth, action = {}) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        auth: {
          ...state.auth,
          isPendingRequest: true
        }
      }
    case LOG_IN_REQUEST_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          isPendingRequest: false,
          jwt: action.payload.jwt
        }
      }
    case LOG_IN_REQUEST_FAILURE:
      return {
        ...state,
        auth: {
          ...state.auth,
          isPendingRequest: false,
          error: action.payload.error,
          jwt: null
        }
      }
    case LOG_OUT:
      return {
        ...state,
        jwt: null
      }
    case TOGGLE:
      return {
        ...state,
        isRegistration: !state.isRegistration
      }
    default:
      return state
  }
}
