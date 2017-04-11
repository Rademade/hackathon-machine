import {
  HACKATHON_QUERY_REQUEST,
  HACKATHON_GET_REQUEST,
  HACKATHON_CREATE_REQUEST,
  HACKATHON_UPDATE_REQUEST,
  HACKATHON_DELETE_REQUEST
} from 'constants/hackathon'

export default {
  query: _ => dispatch => dispatch({ type: HACKATHON_QUERY_REQUEST }),
  get: id => dispatch => dispatch({
    type: HACKATHON_GET_REQUEST,
    payload: {
      id
    }
  }),
  create: data => dispatch => dispatch({
    type: HACKATHON_CREATE_REQUEST,
    payload: {
      data: data
    }
  }),
  update: data => dispatch => dispatch({
    type: HACKATHON_UPDATE_REQUEST,
    payload: {
      data: data
    }
  }),
  delete: id => dispatch => dispatch({
    type: HACKATHON_DELETE_REQUEST,
    payload: {
      id
    }
  })
}
