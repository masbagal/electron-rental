import React from 'react';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import Container from '../container/MainContainer';
import SideMenu from '../components/SideMenu/SideMenu';
import BookForm from '../components/BookForm/BookForm';
import BookTable from '../components/BookTable/BookTable';

import RaisedButton from 'material-ui/RaisedButton';
import Cancel from 'material-ui/svg-icons/action/highlight-off';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/assignment-turned-in';

export default class BookSetup extends React.Component {
  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    return (
      <div>
        <h3 className='inlineBlock'>Add New Book</h3>
        <div className='row'>
          <BookForm />
        </div>
        <div className='row' style={{marginTop: '20px'}}>
          <div className='rightMenu'>
          </div>
        </div>
      </div>
    )
  }

}
