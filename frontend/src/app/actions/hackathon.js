import {push} from 'react-router-redux'
import hackathon from 'api/hackathon'
import {
  HACKATHONS_REQUEST,
  HACKATHONS_REQUEST_SUCCESS,
  HACKATHONS_REQUEST_FAILURE
} from 'constants/hackathon'

export function navigateToHackathonNewPath() {
  return dispatch => dispatch(push('/hackathons/new'))
}

export function navigateToHackathonIndexPath() {
  return dispatch => dispatch(push('/hackathons'))
}

export function navigateToHackathonEditPath(id) {
  return dispatch => dispatch(push(`/hackathons/${id}/edit`))
}

export function fetchHackathons() {
  return dispatch => {
    dispatch({
      type: HACKATHONS_REQUEST
    })

    return hackathon.query().then(
      response => dispatch({
        type: HACKATHONS_REQUEST_SUCCESS,
        payload: response.data
      })
    ).catch(
      error => dispatch({
        type: HACKATHONS_REQUEST_FAILURE,
        payload: error
      })
    )
  }
}
