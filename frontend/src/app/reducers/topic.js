import initialState from 'store/config/initial-state';
import {
  TOPIC_QUERY_REQUEST,
  TOPIC_QUERY_REQUEST_SUCCESS,
  TOPIC_QUERY_REQUEST_FAILURE,
  TOPIC_GET_REQUEST_SUCCESS,
  TOPIC_CREATE_REQUEST_SUCCESS,
  TOPIC_UPDATE_REQUEST_SUCCESS,
  TOPIC_DELETE_REQUEST_SUCCESS
} from 'constants';
import * as _ from 'lodash';

const sort = (items) => _.sortBy(items, 'average_vote').reverse();
const reject = (items, id) => _.reject(items, topic => topic.id === id);
const update = (items, id, newItem) => _.map(items, (item) =>
  item.id === id ? newItem : item
);

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
        topics: sort(action.payload.topics)
      };
    case TOPIC_QUERY_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case TOPIC_GET_REQUEST_SUCCESS:
      return {
        ...state,
        topic: action.payload.topic
      };
    case TOPIC_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        topics: sort(state.topics.concat(action.payload.topic))
      };
    case TOPIC_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        topics: sort(update(state.topics, action.payload.topic.id, action.payload.topic))
      };
    case TOPIC_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        topics: sort(reject(state.topics, action.payload.id))
      };
    default:
      return state;
  }
}
