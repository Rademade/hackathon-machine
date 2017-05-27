import initialState from 'store/initial-state';
import {
  HACKATHON_QUERY_REQUEST,
  HACKATHON_QUERY_REQUEST_SUCCESS,
  HACKATHON_QUERY_REQUEST_FAILURE,
  HACKATHON_GET_REQUEST,
  HACKATHON_GET_REQUEST_SUCCESS,
  HACKATHON_GET_REQUEST_FAILURE,
  HACKATHON_CREATE_REQUEST,
  HACKATHON_CREATE_REQUEST_SUCCESS,
  HACKATHON_CREATE_REQUEST_FAILURE,
  HACKATHON_UPDATE_REQUEST,
  HACKATHON_UPDATE_REQUEST_SUCCESS,
  HACKATHON_UPDATE_REQUEST_FAILURE,
  HACKATHON_DELETE_REQUEST,
  HACKATHON_DELETE_REQUEST_SUCCESS,
  HACKATHON_DELETE_REQUEST_FAILURE
} from 'constants/hackathon';
import * as _ from 'lodash';

export default function hackathonApp(state = initialState.hackathonApp, action = {}) {
  switch (action.type) {
    case HACKATHON_QUERY_REQUEST:
      return {
        ...state,
        error: null
      };
    case HACKATHON_QUERY_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: action.payload.hackathons,
      };
    case HACKATHON_QUERY_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case HACKATHON_GET_REQUEST:
      return {
        ...state,
        error: null
      };
    case HACKATHON_GET_REQUEST_SUCCESS:
      return {
        ...state,
        hackathon: action.payload.hackathon
      };
    case HACKATHON_GET_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case HACKATHON_CREATE_REQUEST:
      return {
        ...state,
        error: null
      };
    case HACKATHON_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: state.hackathons.concat(action.payload.hackathon)
      };
    case HACKATHON_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case HACKATHON_UPDATE_REQUEST:
      return {
        ...state,
        error: null
      };
    case HACKATHON_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: _.map(state.hackathons, hackathon =>
          hackathon.id === action.payload.hackathon.id
            ? action.payload.hackathon
            : hackathon
        )
      };
    case HACKATHON_UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case HACKATHON_DELETE_REQUEST:
      return {
        ...state,
        error: null
      };
    case HACKATHON_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: _.reject(state.hackathons, hackathon => hackathon.id === action.payload.id)
      };
    case HACKATHON_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
