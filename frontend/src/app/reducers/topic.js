import initialState from 'store/initial-state'
import {
  TOPIC_QUERY_REQUEST,
  TOPIC_QUERY_REQUEST_SUCCESS,
  TOPIC_QUERY_REQUEST_FAILURE,
  TOPIC_GET_REQUEST,
  TOPIC_GET_REQUEST_SUCCESS,
  TOPIC_GET_REQUEST_FAILURE,
  TOPIC_CREATE_REQUEST,
  TOPIC_CREATE_REQUEST_SUCCESS,
  TOPIC_CREATE_REQUEST_FAILURE,
  TOPIC_UPDATE_REQUEST,
  TOPIC_UPDATE_REQUEST_SUCCESS,
  TOPIC_UPDATE_REQUEST_FAILURE,
  TOPIC_DELETE_REQUEST,
  TOPIC_DELETE_REQUEST_SUCCESS,
  TOPIC_DELETE_REQUEST_FAILURE
} from 'constants'
import * as _ from 'lodash'

export default function topicApp(state = initialState.topicApp, action = {}) {
  switch (action.type) {
    case TOPIC_QUERY_REQUEST:
      return {
        ...state,
        error: null
      }
    case TOPIC_QUERY_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: action.payload.speakers,
      }
    case TOPIC_QUERY_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    case TOPIC_GET_REQUEST:
      return {
        ...state,
        error: null
      }
    case TOPIC_GET_REQUEST_SUCCESS:
      return {
        ...state,
        speaker: action.payload.speaker
      }
    case TOPIC_GET_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case TOPIC_CREATE_REQUEST:
      return {
        ...state,
        error: null
      }
    case TOPIC_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: state.speakers.concat(state.payload.speaker)
      }
    case TOPIC_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case TOPIC_UPDATE_REQUEST:
      return {
        ...state,
        error: null
      }
    case TOPIC_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: _.map(state.speakers, speaker =>
          speaker.id === action.payload.speaker.id
            ? action.payload.speaker
            : speaker
        )
      }
    case TOPIC_UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case TOPIC_DELETE_REQUEST:
      return {
        ...state,
        error: null
      }
    case TOPIC_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        speakers: _.reject(state.speakers, speaker => speaker.id === action.payload.id)
      }
    case TOPIC_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
