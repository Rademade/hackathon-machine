import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import authReducer from 'reducers/auth'

export default combineReducers({
  routing: routerReducer,
  auth: authReducer
})
