import React from 'react';
import ReactDOM from 'react-dom';
import TransactionPage from './pages/TransactionPage';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
console.log('index js render');
ReactDOM.render(
  <TransactionPage />,
  document.getElementById('app')
)
