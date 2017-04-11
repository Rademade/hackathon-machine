import {fork} from 'redux-saga/effects'
import hackathonSaga from 'sagas/hackathon'
import speakerSaga from 'sagas/speaker'
import topicSaga from 'sagas/topic'

export default function* rootSaga() {
  yield [
    fork(hackathonSaga),
    fork(speakerSaga),
    fork(topicSaga)
  ]
}
