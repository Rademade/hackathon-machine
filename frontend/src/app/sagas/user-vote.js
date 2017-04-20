import {call, put, takeEvery} from 'redux-saga/effects'
import authActions from 'actions/auth'
import navigationActions from 'actions/navigation'
import api from 'api/user-vote'
import {
  USER_VOTE_CREATE_REQUEST,
  USER_VOTE_CREATE_REQUEST_SUCCESS,
  USER_VOTE_CREATE_REQUEST_FAILURE,
  USER_VOTE_UPDATE_REQUEST,
  USER_VOTE_UPDATE_REQUEST_SUCCESS,
  USER_VOTE_UPDATE_REQUEST_FAILURE
} from 'constants'

function* _create(action) {
  try {
    const request = yield call(api.create, action.payload.data)
    yield put({
      type : USER_VOTE_CREATE_REQUEST_SUCCESS,
      payload : {
        topic : request.data
      }
    })
  } catch (e) {
    yield put({
      type : USER_VOTE_CREATE_REQUEST_FAILURE,
      payload : {
        error : e.message
      }
    })
    yield put(authActions.logout())
  }
}

function* _update(action) {
  try {
    const request = yield call(api.update, action.payload.data)
    yield put({
      type : USER_VOTE_UPDATE_REQUEST_SUCCESS,
      payload : {
        topic : request.data
      }
    })
  } catch (e) {
    yield put({
      type : USER_VOTE_UPDATE_REQUEST_FAILURE,
      payload : {
        error : e.message
      }
    })
    yield put(authActions.logout())
  }
}

function* userVoteSaga() {
  yield takeEvery(USER_VOTE_CREATE_REQUEST, _create),
  yield takeEvery(USER_VOTE_UPDATE_REQUEST, _update)
}

export default userVoteSaga
