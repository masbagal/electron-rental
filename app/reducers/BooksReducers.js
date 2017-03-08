import { TYPE } from '../actions/BooksActions';

export function books(state = {}, action) {
  switch (action.type) {
    case TYPE.SAVE_NEW_BOOK:
      return Object.assign({}, state, {
        addedBook: action.data
      });
    default:
      return state;
  }
}
