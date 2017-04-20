import {call, put, takeEvery} from 'redux-saga/effects'
import api from 'api/speaker'
import {
  SPEAKER_QUERY_REQUEST,
  SPEAKER_QUERY_REQUEST_SUCCESS,
  SPEAKER_QUERY_REQUEST_FAILURE,
  SPEAKER_GET_REQUEST,
  SPEAKER_GET_REQUEST_SUCCESS,
  SPEAKER_GET_REQUEST_FAILURE,
  SPEAKER_CREATE_REQUEST,
  SPEAKER_CREATE_REQUEST_SUCCESS,
  SPEAKER_CREATE_REQUEST_FAILURE,
  SPEAKER_UPDATE_REQUEST,
  SPEAKER_UPDATE_REQUEST_SUCCESS,
  SPEAKER_UPDATE_REQUEST_FAILURE,
  SPEAKER_DELETE_REQUEST,
  SPEAKER_DELETE_REQUEST_SUCCESS,
  SPEAKER_DELETE_REQUEST_FAILURE
} from 'constants'

function* _query(action) {
  try {
    const request = yield call(api.query)
    yield put({
      type: SPEAKER_QUERY_REQUEST_SUCCESS,
      payload: {
        speakers: request.data
      }
    })
  } catch (e) {
    yield put({
      type: SPEAKER_QUERY_REQUEST_FAILURE,
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
      type: SPEAKER_GET_REQUEST_SUCCESS,
      payload: {
        speaker: request.data
      }
    })
  } catch (e) {
    yield put({
      type: SPEAKER_GET_REQUEST_FAILURE,
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
      type: SPEAKER_CREATE_REQUEST_SUCCESS,
      payload: {
        speaker: request.data
      }
    })
  } catch (e) {
    yield put({
      type: SPEAKER_CREATE_REQUEST_FAILURE,
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
      type: SPEAKER_UPDATE_REQUEST_SUCCESS,
      payload: {
        speaker: request.data
      }
    })
  } catch (e) {
    yield put({
      type: SPEAKER_UPDATE_REQUEST_FAILURE,
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
      type: SPEAKER_DELETE_REQUEST_SUCCESS,
      payload: {
        id: action.payload.id
      }
    })
  } catch (e) {
    yield put({
      type: SPEAKER_DELETE_REQUEST_FAILURE,
      payload: {
        id: action.payload.id,
        error: e.message
      }
    })
  }
}

function* speakerSaga() {
  yield takeEvery(SPEAKER_QUERY_REQUEST, _query),
  yield takeEvery(SPEAKER_GET_REQUEST, _get),
  yield takeEvery(SPEAKER_CREATE_REQUEST, _create),
  yield takeEvery(SPEAKER_UPDATE_REQUEST, _update),
  yield takeEvery(SPEAKER_DELETE_REQUEST, _delete)
}

export default speakerSaga
