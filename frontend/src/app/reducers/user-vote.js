import initialState from 'store/initial-state'
import {
  USER_VOTE_CREATE_REQUEST,
  USER_VOTE_CREATE_REQUEST_SUCCESS,
  USER_VOTE_CREATE_REQUEST_FAILURE,
  USER_VOTE_UPDATE_REQUEST,
  USER_VOTE_UPDATE_REQUEST_SUCCESS,
  USER_VOTE_UPDATE_REQUEST_FAILURE
} from 'constants'
import * as _ from 'lodash'

export default function topicApp(state = initialState.topicApp, action = {}) {
  switch (action.type) {
    case USER_VOTE_CREATE_REQUEST:
      return {
        ...state,
        error : null
      }
    case USER_VOTE_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        // todo
        // topics : state.topics.concat(action.payload.topic)
      }
    case USER_VOTE_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        error : action.payload.error
      }
    case USER_VOTE_UPDATE_REQUEST:
      return {
        ...state,
        error : null
      }
    case USER_VOTE_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        // todo
        // topics : _.map(state.topics, topic =>
        //   topic.id === action.payload.topic.id
        //     ? action.payload.topic
        //     : topic
        // )
      }
    case USER_VOTE_UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        error : action.payload.error
      }
  }
}
