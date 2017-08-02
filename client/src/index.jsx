import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App/App.jsx';
import store from './store/index.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(store)} >
      <Router history={createBrowserHistory()}>
          <Switch>
              <Route exact path="/" component={App} />
          </Switch>
      </Router>
  </Provider>, document.querySelector('.container'));
