import {
  HACKATHON_DELETE_REQUEST
} from 'constants/hackathon'

export default {
  hackathonDelete: id => dispatch => dispatch({
    type: HACKATHON_DELETE_REQUEST,
    payload: {
      id
    }
  })
}
