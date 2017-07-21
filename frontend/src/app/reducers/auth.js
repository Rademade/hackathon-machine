import {
  SIGN_IN_REQUEST_SUCCESS,
  SIGN_IN_REQUEST_FAILURE,
  SIGN_OUT
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
    case SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        isPendingRequest: false,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        user: getUserFromJwt(action.payload.jwt),
        error: null
      }
    case SIGN_IN_REQUEST_FAILURE:
      return {
        ...state,
        isPendingRequest: false,
        isAuthenticated: false,
        jwt: null,
        error: action.payload
      }
    case SIGN_OUT:
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
