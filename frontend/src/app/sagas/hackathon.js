import {call, put, takeEvery} from 'redux-saga/effects'
import api from 'api/hackathon'
import {
  HACKATHONS_REQUEST,
  HACKATHONS_REQUEST_SUCCESS,
  HACKATHONS_REQUEST_FAILURE,
  HACKATHON_DELETE_REQUEST,
  HACKATHON_DELETE_REQUEST_SUCCESS,
  HACKATHON_DELETE_REQUEST_FAILURE
} from 'constants/hackathon'

function* fetchHackathons(action) {
  try {
    const request = yield call(api.query)
    yield put({
      type: HACKATHONS_REQUEST_SUCCESS,
      payload: {
        hackathons: request.data
      }
    })
  } catch (e) {
    yield put({
      type: HACKATHONS_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    })
  }
}

function* deleteHackathon(action) {
  try {
    const request = yield call(api.delete(action.payload.id))
    yield put({
      type: HACKATHON_DELETE_REQUEST_SUCCESS,
      payload: {
        id: action.payload.id
      }
    })
  } catch (e) {
    yield put({
      type: HACKATHON_DELETE_REQUEST_FAILURE,
      payload: {
        id: action.payload.id,
        error: e.message
      }
    })
  }
}

function* hackathonSaga() {
  yield takeEvery(HACKATHONS_REQUEST, fetchHackathons),
  yield takeEvery(HACKATHON_DELETE_REQUEST, deleteHackathon)
}

export default hackathonSaga
