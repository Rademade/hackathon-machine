import { fork } from 'redux-saga/effects'
import hackathonSaga from 'sagas/hackathon'

export default function* rootSaga() {
  yield [
    fork(hackathonSaga)
  ]
}
