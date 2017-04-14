import {call, put, takeEvery} from 'redux-saga/effects'
import api from 'api/topic'
import {
  TOPIC_QUERY_REQUEST,
  TOPIC_QUERY_REQUEST_SUCCESS,
  TOPIC_QUERY_REQUEST_FAILURE,
  TOPIC_GET_REQUEST,
  TOPIC_GET_REQUEST_SUCCESS,
  TOPIC_GET_REQUEST_FAILURE,
  TOPIC_CREATE_REQUEST,
  TOPIC_CREATE_REQUEST_SUCCESS,
  TOPIC_CREATE_REQUEST_FAILURE,
  TOPIC_UPDATE_REQUEST,
  TOPIC_UPDATE_REQUEST_SUCCESS,
  TOPIC_UPDATE_REQUEST_FAILURE,
  TOPIC_DELETE_REQUEST,
  TOPIC_DELETE_REQUEST_SUCCESS,
  TOPIC_DELETE_REQUEST_FAILURE
} from 'constants'

function* _query(action) {
  try {
    const request = yield call(api.query)
    yield put({
      type: TOPIC_QUERY_REQUEST_SUCCESS,
      payload: {
        topics: request.data
      }
    })
  } catch (e) {
    yield put({
      type: TOPIC_QUERY_REQUEST_FAILURE,
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
      type: TOPIC_GET_REQUEST_SUCCESS,
      payload: {
        topic: request.data
      }
    })
  } catch (e) {
    yield put({
      type: TOPIC_GET_REQUEST_FAILURE,
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
      type: TOPIC_CREATE_REQUEST_SUCCESS,
      payload: {
        topic: request.data
      }
    })
  } catch (e) {
    yield put({
      type: TOPIC_CREATE_REQUEST_FAILURE,
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
      type: TOPIC_UPDATE_REQUEST_SUCCESS,
      payload: {
        topic: request.data
      }
    })
  } catch (e) {
    yield put({
      type: TOPIC_UPDATE_REQUEST_FAILURE,
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
      type: TOPIC_DELETE_REQUEST_SUCCESS,
      payload: {
        id: action.payload.id
      }
    })
  } catch (e) {
    yield put({
      type: TOPIC_DELETE_REQUEST_FAILURE,
      payload: {
        id: action.payload.id,
        error: e.message
      }
    })
  }
}

function* topicSaga() {
  yield takeEvery(TOPIC_QUERY_REQUEST, _query),
  yield takeEvery(TOPIC_GET_REQUEST, _get),
  yield takeEvery(TOPIC_CREATE_REQUEST, _create),
  yield takeEvery(TOPIC_UPDATE_REQUEST, _update),
  yield takeEvery(TOPIC_DELETE_REQUEST, _delete)
}

export default topicSaga
