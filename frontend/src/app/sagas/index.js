import { fork } from 'redux-saga/effects';
import authSaga from 'sagas/auth';
import hackathonSaga from 'sagas/hackathon';
import speakerSaga from 'sagas/speaker';
import topicSaga from 'sagas/topic';
import userVoteSaga from 'sagas/user-vote';

export default function* rootSaga() {
  yield [
    fork(authSaga),
    fork(hackathonSaga),
    fork(speakerSaga),
    fork(topicSaga),
    fork(userVoteSaga)
  ];
}
