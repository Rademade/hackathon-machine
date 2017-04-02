import {push} from 'react-router-redux'
import {} from 'constants/hackathon'

export function navigateToHackathonNewPath() {
  return dispatch => dispatch(push('/hackathons/new'))
}

export function navigateToHackathonIndexPath() {
  return dispatch => dispatch(push('/hackathons'))
}

export function navigateToHackathonEditPath(id) {
  return dispatch => dispatch(push(`/hackathons/${id}/edit`))
}
