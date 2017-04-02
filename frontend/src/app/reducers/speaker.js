import initialState from 'store/initial-state'
import {
  SPEAKERS_REQUEST,
  SPEAKERS_REQUEST_SUCCESS,
  SPEAKERS_REQUEST_FAILURE
} from 'constants/speaker'

export default function speakerApp(state = initialState.speakerApp, action = {}) {
  switch (action.type) {
    case SPEAKERS_REQUEST:
      return {
        ...state,
        isPendingRequest: true
      }
    case SPEAKERS_REQUEST_SUCCESS:
      return {
        ...state,
        hackathons: action.payload,
        isPendingRequest: false
      }
    case SPEAKERS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPendingRequest: false
      }
    default:
      return state
  }
}
