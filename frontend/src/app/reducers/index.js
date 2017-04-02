import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import authApp from 'reducers/auth'
import hackathonApp from 'reducers/hackathon'

export default combineReducers({
  routing: routerReducer,
  authApp,
  hackathonApp
})
