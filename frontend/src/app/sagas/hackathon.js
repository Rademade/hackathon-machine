import {call, put, takeEvery} from 'redux-saga/effects'
import api from 'api/hackathon'
import {
  HACKATHON_QUERY_REQUEST,
  HACKATHON_QUERY_REQUEST_SUCCESS,
  HACKATHON_QUERY_REQUEST_FAILURE,
  HACKATHON_GET_REQUEST,
  HACKATHON_GET_REQUEST_SUCCESS,
  HACKATHON_GET_REQUEST_FAILURE,
  HACKATHON_CREATE_REQUEST,
  HACKATHON_CREATE_REQUEST_SUCCESS,
  HACKATHON_CREATE_REQUEST_FAILURE,
  HACKATHON_UPDATE_REQUEST,
  HACKATHON_UPDATE_REQUEST_SUCCESS,
  HACKATHON_UPDATE_REQUEST_FAILURE,
  HACKATHON_DELETE_REQUEST,
  HACKATHON_DELETE_REQUEST_SUCCESS,
  HACKATHON_DELETE_REQUEST_FAILURE
} from 'constants'

function* _query(action) {
  try {
    const request = yield call(api.query)
    yield put({
      type: HACKATHON_QUERY_REQUEST_SUCCESS,
      payload: {
        hackathons: request.data
      }
    })
  } catch (e) {
    yield put({
      type: HACKATHON_QUERY_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    })
  }
}

function* _get(action) {
  try {
    const request = yield call(api.get(action.payload.id))
    yield put({
      type: HACKATHON_GET_REQUEST_SUCCESS,
      payload: {
        hackathon: request.data
      }
    })
  } catch (e) {
    yield put({
      type: HACKATHON_GET_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    })
  }
}

function* _create(action) {
  try {
    const request = yield call(api.create, action.payload.data)
    yield put({
      type: HACKATHON_CREATE_REQUEST_SUCCESS,
      payload: {
        hackathon: request.data
      }
    })
  } catch (e) {
    yield put({
      type: HACKATHON_CREATE_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    })
  }
}

function* _update(action) {
  try {
    const request = yield call(api.update, action.payload.data)
    yield put({
      type: HACKATHON_UPDATE_REQUEST_SUCCESS,
      payload: {
        hackathon: request.data
      }
    })
  } catch (e) {
    yield put({
      type: HACKATHON_UPDATE_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    })
  }
}

function* _delete(action) {
  try {
    const request = yield call(api.delete, action.payload.id)
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
  yield takeEvery(HACKATHON_QUERY_REQUEST, _query),
  yield takeEvery(HACKATHON_GET_REQUEST, _get),
  yield takeEvery(HACKATHON_CREATE_REQUEST, _create),
  yield takeEvery(HACKATHON_UPDATE_REQUEST, _update),
  yield takeEvery(HACKATHON_DELETE_REQUEST, _delete)
}

export default hackathonSaga
