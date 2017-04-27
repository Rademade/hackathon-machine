import {call, put, takeEvery} from 'redux-saga/effects'
import api from 'api/auth'
import authActions from 'actions/auth'
import navigationActions from 'actions/navigation'
import {
  LOAD_JWT,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAILURE,
  LOG_OUT
} from 'constants'

function* _login(action) {
  try {
    const request = yield call(api.login, action.payload.data)
    yield put({
      type: LOG_IN_REQUEST_SUCCESS,
      payload: {
        jwt: request.data.token
      }
    })
    localStorage.setItem('jwt', request.data.token)
    yield put(navigationActions.goToHackathons())
  } catch (e) {
    yield put({
      type: LOG_IN_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    })
    yield put(authActions.logout())
  }
}


function* authSaga() {
  yield takeEvery(LOG_IN_REQUEST, _login)
}

export default authSaga
