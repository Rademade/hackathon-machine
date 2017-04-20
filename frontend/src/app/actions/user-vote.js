import {
  USER_VOTE_CREATE_REQUEST,
  USER_VOTE_UPDATE_REQUEST
} from 'constants'

export default {
  create : data => dispatch => (
      new Promise((resolve) => {
        dispatch({
          type : USER_VOTE_CREATE_REQUEST,
          payload : {
            data : data
          }
        });
        resolve(data)
      })
  ),
  update : data => dispatch => (
      new Promise((resolve) => {
        dispatch({
          type : USER_VOTE_UPDATE_REQUEST,
          payload : {
            data : data
          }
        });
        resolve(data)
      })
  )
}
