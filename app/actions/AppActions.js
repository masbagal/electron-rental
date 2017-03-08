export const TYPE = {
  CHANGE_MENU: 'CHANGE_MENU',
};

export function changeMenu(menuName) {
  return {
    type: TYPE.CHANGE_MENU,
    menuName: menuName
  }
}
