import {
  SPEAKER_QUERY_REQUEST,
  SPEAKER_GET_REQUEST,
  SPEAKER_CREATE_REQUEST,
  SPEAKER_UPDATE_REQUEST,
  SPEAKER_DELETE_REQUEST
} from 'constants'

export default {
  query: _ => dispatch => dispatch({ type: SPEAKER_QUERY_REQUEST }),
  get: id => dispatch => dispatch({
    type: SPEAKER_GET_REQUEST,
    payload: {
      id
    }
  }),
  create: data => dispatch => dispatch({
    type: SPEAKER_CREATE_REQUEST,
    payload: {
      data: data
    }
  }),
  update: data => dispatch => dispatch({
    type: SPEAKER_UPDATE_REQUEST,
    payload: {
      data: data
    }
  }),
  delete: id => dispatch => dispatch({
    type: SPEAKER_DELETE_REQUEST,
    payload: {
      id
    }
  })
}
