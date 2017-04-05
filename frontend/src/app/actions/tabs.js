import {push} from 'react-router-redux'
import { NAVIGATE_TO_TOPICS, NAVIGATE_TO_HACKATONS, NAVIGATE_TO_USERS } from 'constants/tabs'

export function navigateToTopics() {
  return dispatch => {
    dispatch(push('/topics'))
    dispatch({ type: NAVIGATE_TO_TOPICS })
  }
}

export function navigateToHackatons() {
  return dispatch => {
    dispatch(push('/hackathons'))
    dispatch({ type: NAVIGATE_TO_HACKATONS })
  }
}

export function navigateToUsers() {
  return dispatch => {
    dispatch(push('/users'))
    dispatch({ type: NAVIGATE_TO_USERS })
  }
}
