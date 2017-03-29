import React from 'react'
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import {browserHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware, push} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from 'reducers'
import authActions from 'actions/auth'

const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(browserHistory)


export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow"/>
  </DockMonitor>
)

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      reduxRouterMiddleware,
      thunkMiddleware,
      loggerMiddleware
    ),
    DevTools.instrument()
  )

  const store = createStore(
    reducers,
    initialState,
    enhancer
  )

  if (typeof window !== 'undefined') {
    // simulate auth
    sessionStorage.jwt = 'bla bla bla'

    // if is logged and user on auth page -> redirect to dashboard
    if (sessionStorage.jwt && (/auth/).test(window.location.pathname)) {
      store.dispatch(push('/'))
    }
  }

  return store
}
