import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import DbService from './database/DbService';

import MainContainer from './container/MainContainer';

import HomePage from './pages/HomePage';
import BookList from './pages/BookList';
import BookSetup from './pages/BookSetup';


injectTapEventPlugin();
window.dbService = new DbService();

const store = createStore(reducers, {}, applyMiddleware(thunk));

console.log('index js render');
ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'component={MainContainer}>
        <IndexRoute component={HomePage} />
        <Route path='/list' component={BookList} />
        <Route path='/add' component={BookSetup} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('app')
)
