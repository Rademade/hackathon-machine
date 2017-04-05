import initialState from 'store/initial-state'
import {
  HACKATHONS_REQUEST,
  HACKATHONS_REQUEST_SUCCESS,
  HACKATHONS_REQUEST_FAILURE
} from 'constants/hackathon'

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
        isPendingRequest: false
      }
    case HACKATHONS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPendingRequest: false
      }
    default:
      return state
  }
}
