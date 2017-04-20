import {
  TOPIC_QUERY_REQUEST,
  TOPIC_GET_REQUEST,
  TOPIC_CREATE_REQUEST,
  TOPIC_UPDATE_REQUEST,
  TOPIC_DELETE_REQUEST
} from 'constants'

export default {
  query: _ => dispatch => dispatch({ type: TOPIC_QUERY_REQUEST }),
  get: id => dispatch => dispatch({
    type: TOPIC_GET_REQUEST,
    payload: {
      id
    }
  }),
  create: data => dispatch => (
    new Promise((resolve) => {
      dispatch({
        type: TOPIC_CREATE_REQUEST,
        payload: {
          data: data
        }
      });
      resolve(data)
    })
  ),
  update : data => dispatch => (
    new Promise((resolve) => {
      dispatch({
        type: TOPIC_UPDATE_REQUEST,
        payload: {
          data: data
        }
      });
      resolve(data)
    })
  ),
  delete: id => dispatch => dispatch({
    type: TOPIC_DELETE_REQUEST,
    payload: {
      id
    }
  })
}
