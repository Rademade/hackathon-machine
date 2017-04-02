import topic from 'api/topic'
import {
  TOPICS_REQUEST,
  TOPICS_REQUEST_SUCCESS,
  TOPICS_REQUEST_FAILURE
} from 'constants/topic'

export function fetchTopics() {
  return dispatch => {
    dispatch({
      type: TOPICS_REQUEST
    })

    return topic.query().then(
      response => dispatch({
        type: TOPICS_REQUEST_SUCCESS,
        payload: response.data
      })
    ).catch(
      error => dispatch({
        type: TOPICS_REQUEST_FAILURE,
        payload: error
      })
    )
  }
}
