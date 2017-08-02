import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'api/auth';
import auth from 'actions/auth';
import navigation from 'actions/navigation';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_REQUEST_SUCCESS,
  SIGN_UP_REQUEST_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_REQUEST_SUCCESS,
  SIGN_IN_REQUEST_FAILURE
} from 'constants';

function* _signUp(action) {
  try {
    const request = yield call(api.signUp, action.payload.data);

    yield put({ type: SIGN_UP_REQUEST_SUCCESS });
    yield put(navigation.goToAuthLogin());
  } catch (e) {
    yield put({
      type: SIGN_IN_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    });
  }
}

function* _signIn(action) {
  try {
    const request = yield call(api.signIn, action.payload.data);

    yield put({
      type: SIGN_IN_REQUEST_SUCCESS,
      payload: request.data
    });

    localStorage.setItem('jwt', request.data.token);
    localStorage.setItem('user', JSON.stringify(request.data.user));

    yield put(navigation.goToHackathons());
  } catch (e) {
    yield put({
      type: SIGN_IN_REQUEST_FAILURE,
      payload: {
        error: e.message
      }
    });
  }
}

function* authSaga() {
  yield takeEvery(SIGN_UP_REQUEST, _signUp);
  yield takeEvery(SIGN_IN_REQUEST, _signIn);
}

export default authSaga;
