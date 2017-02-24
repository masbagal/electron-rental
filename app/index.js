import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import DbService from './database/DbService';

import MainContainer from './container/MainContainer';

import HomePage from './pages/HomePage';
import BookList from './pages/BookList';
import BookSetup from './pages/BookSetup';


injectTapEventPlugin();
window.dbService = new DbService();
console.log('index js render');
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/'component={MainContainer}>
      <IndexRoute component={HomePage} />
      <Route path='/list' component={BookList} />
      <Route path='/add' component={BookSetup} />
    </Route>
  </Router>),
  document.getElementById('app')
)
