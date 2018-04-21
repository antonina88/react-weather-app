import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/app';
import store from './store';
import './styles/styles.scss';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/app', () => {
      const NewApp = require('./containers/app').default;
      render(
        <Provider store={store}>
          <NewApp />
        </Provider>,
        document.getElementById('app')
      );
  });
}
