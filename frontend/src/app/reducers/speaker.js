import initialState from 'store/initial-state';
import {
  SPEAKER_QUERY_REQUEST,
  SPEAKER_QUERY_REQUEST_SUCCESS,
  SPEAKER_QUERY_REQUEST_FAILURE,
  SPEAKER_GET_REQUEST,
  SPEAKER_GET_REQUEST_SUCCESS,
  SPEAKER_GET_REQUEST_FAILURE,
  SPEAKER_CREATE_REQUEST,
  SPEAKER_CREATE_REQUEST_SUCCESS,
  SPEAKER_CREATE_REQUEST_FAILURE,
  SPEAKER_UPDATE_REQUEST,
  SPEAKER_UPDATE_REQUEST_SUCCESS,
  SPEAKER_UPDATE_REQUEST_FAILURE,
  SPEAKER_DELETE_REQUEST,
  SPEAKER_DELETE_REQUEST_SUCCESS,
  SPEAKER_DELETE_REQUEST_FAILURE
} from 'constants';
import * as _ from 'lodash';

export default function speakerApp(state = initialState.speakerApp, action = {}) {
  switch (action.type) {
    case SPEAKER_QUERY_REQUEST:
      return {
        ...state,
        error: null
      };
    case SPEAKER_QUERY_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: action.payload.speakers,
      };
    case SPEAKER_QUERY_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case SPEAKER_GET_REQUEST:
      return {
        ...state,
        error: null
      };
    case SPEAKER_GET_REQUEST_SUCCESS:
      return {
        ...state,
        speaker: action.payload.speaker
      };
    case SPEAKER_GET_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case SPEAKER_CREATE_REQUEST:
      return {
        ...state,
        error: null
      };
    case SPEAKER_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: state.speakers.concat(action.payload.speaker)
      };
    case SPEAKER_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case SPEAKER_UPDATE_REQUEST:
      return {
        ...state,
        error: null
      };
    case SPEAKER_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: _.map(state.speakers, speaker =>
          speaker.id === action.payload.speaker.id
            ? action.payload.speaker
            : speaker
        )
      };
    case SPEAKER_UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case SPEAKER_DELETE_REQUEST:
      return {
        ...state,
        error: null
      };
    case SPEAKER_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: _.reject(state.speakers, speaker => speaker.id === action.payload.id)
      };
    case SPEAKER_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
