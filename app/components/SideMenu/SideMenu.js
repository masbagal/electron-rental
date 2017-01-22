import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

import Out from 'material-ui/svg-icons/content/unarchive';
import In from 'material-ui/svg-icons/content/archive';
import Book from 'material-ui/svg-icons/action/Book';

export default class SideMenu extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='col-3' id='side-menu'>
          <List>
            <ListItem leftIcon={<Out />} primaryText="Lending" secondaryText="Process lending transaction" />
            <ListItem leftIcon={<In />} primaryText="Return" secondaryText="Process returning transaction"  />
            <ListItem leftIcon={<Book />} primaryText="Book Data" secondaryText="Manage book inventory" />
          </List>
        </div>
      </MuiThemeProvider>
    )
  }
}
