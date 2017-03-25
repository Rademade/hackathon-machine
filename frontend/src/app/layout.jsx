import React from 'react'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from 'components/Header'
import store from 'store'
import routes from './routes'
import {DevTools} from 'store/configure-store'

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)

const Layout = () => (
  <Provider store={store} key='provider'>
    <MuiThemeProvider>
      <div>
        <Header/>
        <Router history={history} routes={routes}/>
      </div>
    </MuiThemeProvider>
  </Provider>
)

export default Layout
