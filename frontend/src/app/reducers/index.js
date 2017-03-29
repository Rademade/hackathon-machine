import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import auth from 'reducers/auth'
import hackathon from 'reducers/hackathon'

export default combineReducers({
  routing: routerReducer,
  auth,
  hackathon
})
