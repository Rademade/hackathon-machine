import React from 'react';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import store from 'store';
import routes from './routes';

injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store)
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(46, 199, 131)'
  },
  appBar: {
    height: 50
  },
});

const Layout = () => (
  <Provider store={store} key='provider'>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Header/>
        <Navigation/>
        <Router history={history} routes={routes}/>
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default Layout;
