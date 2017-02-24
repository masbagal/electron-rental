import React from 'react';
import { Link } from 'react-router-dom'


export default class SideMenu extends React.Component {
  render() {
    return (
        <div className='columns three' id='side-menu'>
          <ul>
            <Link to='/'>
              <li>Dashboard</li>
            </Link>
            <Link to='list'>
              <li>List of Book</li>
            </Link>
            <Link to='add'>
              <li className='active'>Setup Book</li>
            </Link>
            <li>List of Book</li>
          </ul>
        </div>
    )
  }
}
