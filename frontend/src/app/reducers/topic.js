import initialState from 'store/config/initial-state';
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
} from 'constants';
import * as _ from 'lodash';

export default function topicApp(state = initialState.topicApp, action = {}) {
  switch (action.type) {
    case TOPIC_QUERY_REQUEST:
      return {
        ...state,
        error: null
      };
    case TOPIC_QUERY_REQUEST_SUCCESS:
      return {
        ...state,
        topics: _.sortBy(action.payload.topics, 'average_vote').reverse()
      };
    case TOPIC_QUERY_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case TOPIC_GET_REQUEST:
      return {
        ...state,
        error: null
      };
    case TOPIC_GET_REQUEST_SUCCESS:
      return {
        ...state,
        topic: action.payload.topic
      };
    case TOPIC_GET_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case TOPIC_CREATE_REQUEST:
      return {
        ...state,
        error: null
      };
    case TOPIC_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        topics: state.topics.concat(action.payload.topic)
      };
    case TOPIC_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case TOPIC_UPDATE_REQUEST:
      return {
        ...state,
        error: null
      };
    case TOPIC_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        topics: _.map(state.topics, topic =>
          topic.id === action.payload.topic.id
            ? action.payload.topic
            : topic
        )
      };
    case TOPIC_UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case TOPIC_DELETE_REQUEST:
      return {
        ...state,
        error: null
      };
    case TOPIC_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        topics: _.reject(state.topics, topic => topic.id === action.payload.id)
      };
    case TOPIC_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
