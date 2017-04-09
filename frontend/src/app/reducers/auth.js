import {
  LOAD_JWT,
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
    case LOAD_JWT:
      return {
        ...state,
        jwt: action.payload,
        isAuthenticated: (action.payload ? true : false)
      }
    case LOG_IN_REQUEST:
      return {
        ...state,
        auth: {
          ...state.auth,
          isPendingRequest: true,
          error: null
        }
      }
    case LOG_IN_REQUEST_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          isPendingRequest: false,
          isAuthenticated: true,
          jwt: action.payload,
          error: null,
        }
      }
    case LOG_IN_REQUEST_FAILURE:
      return {
        ...state,
        auth: {
          ...state.auth,
          isPendingRequest: false,
          isAuthenticated: false,
          jwt: null,
          error: action.payload
        }
      }
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        jwt: null
      }
    case ENABLE_LOGIN_BUTTON:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          isAvailableSubmit: true
        }
      }
    case DISABLE_LOGIN_BUTTON:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          isAvailableSubmit: false
        }
      }
    default:
      return state
  }
}
