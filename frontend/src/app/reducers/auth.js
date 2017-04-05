import {
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT,
  ENABLE_LOGIN_BUTTON,
  DISABLE_LOGIN_BUTTON
} from 'constants/auth'
import initialState from 'store/initial-state'

export default function auth(state = initialState.authApp, action = {}) {
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
    case ENABLE_LOGIN_BUTTON:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          canSubmit: true
        }
      }
    case DISABLE_LOGIN_BUTTON:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          canSubmit: false
        }
      }
    default:
      return state
  }
}
