import initialState from 'store/initial-state'
import {
  TOPICS_REQUEST,
  TOPICS_REQUEST_SUCCESS,
  TOPICS_REQUEST_FAILURE
} from 'constants/topic'

export default function topicApp(state = initialState.topicApp, action = {}) {
  switch (action.type) {
    case TOPICS_REQUEST:
      return {
        ...state,
        isPendingRequest: true
      }
    case TOPICS_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: action.payload,
        isPendingRequest: false
      }
    case TOPICS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPendingRequest: false
      }
    default:
      return state
  }
}
