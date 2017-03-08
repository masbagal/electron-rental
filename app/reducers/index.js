import { combineReducers } from 'redux';
import { books } from './BooksReducers';
import { appState } from './AppReducers';

const reducers = combineReducers({
  books,
  appState,
});

export default reducers;
