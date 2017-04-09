import initialState from 'store/initial-state'
import {
  HACKATHONS_REQUEST,
  HACKATHONS_REQUEST_SUCCESS,
  HACKATHONS_REQUEST_FAILURE,
  HACKATHON_DELETE_REQUEST,
  HACKATHON_DELETE_REQUEST_SUCCESS,
  HACKATHON_DELETE_REQUEST_FAILURE
} from 'constants/hackathon'
import * as _ from 'lodash'

export default function hackathonApp(state = initialState.hackathonApp, action = {}) {
  switch (action.type) {
    case HACKATHONS_REQUEST:
      return {
        ...state,
        isPendingRequest: true
      }
    case HACKATHONS_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: action.payload,
        isPendingRequest: false,
        error: null
      }
    case HACKATHONS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isPendingRequest: false
      }
    case HACKATHON_DELETE_REQUEST:
      return {
        ...state,
        isPendingRequest: true,
        error: null
      }
    case HACKATHON_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        hackathons: _.reject(state.hackathons, hackathon => hackathon.id === action.payload.id)
      }
    case HACKATHON_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
