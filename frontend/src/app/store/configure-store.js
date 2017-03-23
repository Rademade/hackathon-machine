import {browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware, push} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from 'reducers'
import authActions from 'actions/auth'

const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(browserHistory)

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      reduxRouterMiddleware,
      thunkMiddleware,
      loggerMiddleware
    )
  )

  if (typeof window !== 'undefined') {
    // store.dispatch(authActions.login(localStorage.getItem('user')))
  }

  return store
}
