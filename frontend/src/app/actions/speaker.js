import speaker from 'api/speaker'
import {
  SPEAKERS_REQUEST,
  SPEAKERS_REQUEST_SUCCESS,
  SPEAKERS_REQUEST_FAILURE
} from 'constants/speaker'

export function fetchSpeakers() {
  return dispatch => {
    dispatch({
      type: SPEAKERS_REQUEST
    })

    return speaker.query().then(
      response => dispatch({
        type: SPEAKERS_REQUEST_SUCCESS,
        payload: response.data
      })
    ).catch(
      error => dispatch({
        type: SPEAKERS_REQUEST_FAILURE,
        payload: error
      })
    )
  }
}
