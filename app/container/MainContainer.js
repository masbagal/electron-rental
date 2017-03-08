import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Container from '../container/MainContainer';
import SideMenu from '../components/SideMenu/SideMenu';
import BookForm from '../components/BookForm/BookForm';
import BookTable from '../components/BookTable/BookTable';

import HomePage from '../pages/HomePage';
import BookList from '../pages/BookList';
import BookSetup from '../pages/BookSetup';

export default class MainContainer extends React.Component {
  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    return (
      <div className='row'>
        <SideMenu />
        <div className='eight columns' style={{ paddingTop: '50px' }}>
          {this.props.children}
        </div>
      </div>
    )
  }

}
