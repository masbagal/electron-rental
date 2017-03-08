import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { TYPE, changeMenu } from '../../actions/AppActions';

const MENU = {
  DASHBOARD: 'DASHBOARD',
  LIST: 'LIST',
  SETUP: 'SETUP',
  OTHERS: 'OTHERS',
};

class SideMenu extends React.Component {
  handleClickMenu = (menu) => (e) => {
    this.props.dispatch(changeMenu(menu));
  }

  render() {
    const activeMenu = this.props.activeMenu;
    return (
        <div className='columns three' id='side-menu'>
          <ul>
            <Link to='/'>
              <li onClick={this.handleClickMenu(MENU.DASHBOARD)} className={activeMenu === MENU.DASHBOARD ? 'active' : ''}>
                Dashboard
              </li>
            </Link>
            <Link to='list'>
              <li onClick={this.handleClickMenu(MENU.LIST)} className={activeMenu === MENU.LIST ? 'active' : ''}>
                List of Book
              </li>
            </Link>
            <Link to='add'>
              <li onClick={this.handleClickMenu(MENU.SETUP)} className={activeMenu === MENU.SETUP ? 'active' : ''}>
                Setup Book
               </li>
            </Link>
            <li onClick={this.handleClickMenu(MENU.OTHERS)} className={activeMenu === MENU.OTHERS ? 'active' : ''}>
              List of Book
            </li>
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeMenu: state.appState.activeMenu
  }
}

export default connect(mapStateToProps)(SideMenu);
