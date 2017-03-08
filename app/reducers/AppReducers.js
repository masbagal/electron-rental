import { TYPE } from '../actions/AppActions';

const defaultState = {
  activeMenu: 'DASHBOARD',
}

export function appState(state = defaultState, action) {
  switch (action.type) {
    case TYPE.CHANGE_MENU:
      return Object.assign({}, state, {
        activeMenu: action.menuName
      });
    default:
      return state;
  }
}
