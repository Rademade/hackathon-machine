import {
  LOAD_JWT,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT
} from 'constants/auth'
import initialState from 'store/initial-state'

export default function auth(state = initialState.authApp, action = {}) {
  switch (action.type) {
    case LOAD_JWT:
      return {
        ...state,
        jwt: action.payload,
        isAuthenticated: (action.payload ? true : false),
        isAdmin: true // todo
      }
    case LOG_IN_REQUEST:
      return {
        ...state,
        isPendingRequest: true,
        error: null
      }
    case LOG_IN_REQUEST_SUCCESS:
      return {
        ...state,
        isPendingRequest: false,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        isAdmin: true, // todo
        error: null
      }
    case LOG_IN_REQUEST_FAILURE:
      return {
        ...state,
        isPendingRequest: false,
        isAuthenticated: false,
        jwt: null,
        error: action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        jwt: null,
        isPendingRequest: false,
        isAuthenticated: false,
        isAdmin: false
      }
    default:
      return state
  }
}
