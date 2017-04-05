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

import {loadJWT} from 'actions/auth'
import {fetchHackathons} from 'actions/hackathon'
import {fetchSpeakers} from 'actions/speaker'
import {fetchTopics} from 'actions/topic'

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
    store.dispatch(loadJWT(localStorage.getItem('jwt') || 'bla bla bla')).then((jwt) => {
      if (jwt) {
        store.dispatch(fetchHackathons())
        store.dispatch(fetchSpeakers())
        store.dispatch(fetchTopics())

        if ((/auth/).test(window.location.pathname)) store.dispatch(push('/'))
      }
    })
  }

  return store
}
