import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';


export default class SideMenu extends React.Component {
  render() {
    return (
        <div className='columns three' id='side-menu'>
          <ul>
            <li>Dashboard</li>
            <li className='active'>List of Book</li>
            <li>List of Book</li>
            <li>List of Book</li>
          </ul>
        </div>
    )
  }
}
