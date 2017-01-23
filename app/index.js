import React from 'react';
import ReactDOM from 'react-dom';
import TransactionPage from './pages/TransactionPage';
import injectTapEventPlugin from 'react-tap-event-plugin';

import DbService from './database/DbService';

injectTapEventPlugin();
window.dbService = new DbService();
console.log('index js render');
ReactDOM.render(
  <TransactionPage />,
  document.getElementById('app')
)
