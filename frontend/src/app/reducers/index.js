import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import authApp from 'reducers/auth'
import hackathonApp from 'reducers/hackathon'
import speakerApp from 'reducers/speaker'
import topicApp from 'reducers/topic'

export default combineReducers({
  routing: routerReducer,
  authApp,
  hackathonApp,
  speakerApp,
  topicApp
})
