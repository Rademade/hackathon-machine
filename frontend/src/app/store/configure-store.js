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
    // simulate auth
    sessionStorage.jwt = 'bla bla bla'

    // if is logged -> redirect to dashboard
    if (sessionStorage.jwt) {
      store.dispatch(push('/'))
    }
  }

  return store
}
