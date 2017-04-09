import React from 'react'
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import {browserHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware, push} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import authActions from 'actions/auth'
import reducers from 'reducers'
import sagas from 'sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
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
      sagaMiddleware,
      // loggerMiddleware   /* enable if you need */
    ),
    DevTools.instrument()
  )

  const store = createStore(
    reducers,
    initialState,
    enhancer
  )

  sagaMiddleware.run(sagas)

  if (typeof window !== 'undefined') {
    // hook for auth
    localStorage.setItem('jwt', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.po9twTrX99V7XgAk5mVskkiq8aa0lpYOue62ehubRY4')

    store.dispatch(authActions.loadJWT(localStorage.getItem('jwt'))).then((jwt) => {
      if (jwt && ((/auth/).test(window.location.pathname))) store.dispatch(push('/'))
    })
  }

  return store
}
