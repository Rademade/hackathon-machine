import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { store, history } from 'store/index';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

injectTapEventPlugin();

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
