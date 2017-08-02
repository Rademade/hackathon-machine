import {
  SIGN_IN_REQUEST_SUCCESS,
  SIGN_IN_REQUEST_FAILURE,
  SIGN_OUT
} from 'constants/auth';
import initialState from 'store/config/initial-state';

export default function auth(state = initialState.authApp, action = {}) {
  switch (action.type) {
    case SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload.token,
        user: action.payload.user,
        error: null
      }
    case SIGN_IN_REQUEST_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        jwt: null,
        error: action.payload
      }
    case SIGN_OUT:
      return {
        ...state,
        jwt: null,
        isAuthenticated: false,
        user: {}
      }
    default:
      return state
  }
}
