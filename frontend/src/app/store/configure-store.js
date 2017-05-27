import React from 'react';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import authActions from 'actions/auth';
import reducers from 'reducers';
import sagas from 'sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  const middleware = [
    reduxRouterMiddleware,
    thunkMiddleware,
    sagaMiddleware
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(loggerMiddleware);
  }

  const enhancer = applyMiddleware.apply(this, middleware);
  const store = createStore(
    reducers,
    initialState,
    enhancer
  );

  sagaMiddleware.run(sagas);

  if (typeof window !== 'undefined') {
    store.dispatch(authActions.loadJWT(localStorage.getItem('jwt'))).then(jwt => {
      if (jwt) {
        if ((/auth/).test(window.location.pathname)) store.dispatch(push('/'));
      } else {
        store.dispatch(push('/auth'));
      }
    })
  }

  return store;
}
