import {
  LOAD_JWT,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT
} from 'constants/auth';
import initialState from 'store/config/initial-state';

let getUserFromJwt = (jwt) => {
  if (jwt) {
    return JSON.parse(atob(jwt.split('.')[1]));
  } else {
    return { isAdmin: false };
  }
};

export default function auth(state = initialState.authApp, action = {}) {
  switch (action.type) {
    case LOAD_JWT:
      return {
        ...state,
        jwt: action.payload,
        isAuthenticated: (action.payload ? true : false),
        user: getUserFromJwt(action.payload)
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
        user: getUserFromJwt(action.payload.jwt),
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
        user: {}
      }
    default:
      return state
  }
}
