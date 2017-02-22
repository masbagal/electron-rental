import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import Container from '../container/MainContainer';
import SideMenu from '../components/SideMenu/SideMenu';

import RaisedButton from 'material-ui/RaisedButton';
import NewTransaction from 'material-ui/svg-icons/action/note-add';
import Cancel from 'material-ui/svg-icons/action/highlight-off';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/assignment-turned-in';

import TextField from 'material-ui/TextField';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

import {red800, blue900} from 'material-ui/styles/colors';

export default class TransactionPage extends React.Component {
  componentDidMount() {
    console.log('component did mount');
  }

  openNewWindow() {
    const modalPath = __dirname;
    console.log(modalPath);
  }

  render() {
    const dummyData = [
      {
        no: 1,
        title: 'Doraemon 1',
        qty: 2
      },
      {
        no: 2,
        title: 'Doraemon Petualangan 13',
        qty: 2
      },
      {
        no: 3,
        title: 'Magnus Chase:The Hammer of Thor',
        qty: 1
      },
      {
        no: 4,
        title: 'Barefoot Gen 1',
        qty: 3
      },
    ]


    return (
      <MuiThemeProvider>
        <div id='mainContainer' className='row'>
          <SideMenu />
          <div className='columns nine content-container'>
            <h3 className='inlineBlock'>Lending Transaction</h3>
            <div className='rightMenu'>
              <RaisedButton
                 label="New Transaction"
                 primary={true}
                 icon={<NewTransaction />}
              />
              <span> </span>
              <RaisedButton
                 label="Cancel"
                 labelColor={`#ffffff`}
                 backgroundColor={`#e74c3c`}
                 icon={<Cancel />}
              />
            </div>
            <Divider />
            <div className='row'>
              <div className='col-4'>
                <TextField
                  floatingLabelFixed={true}
                  hintText="Renter Name"
                  floatingLabelText="Renter Name"
                />
              </div>
              <div className='col-4'>
                <TextField
                  value={new Date().toDateString()}
                  disabled={true}
                  floatingLabelFixed={true}
                  floatingLabelText="Due Date"
                />
              </div>
              <div className='col-4'>
                <TextField
                  value='123612'
                  disabled={true}
                  hintText="Transaction ID"
                  floatingLabelText="Transaction ID"
                  floatingLabelFixed={true}
                />
              </div>
            </div>
            <div className='row' style={{marginTop: '20px'}}>
              <Table height={`300px`} fixedHeader={true} bodyStyle={{background: '#bdc3c7'}}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn>No.</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Qty</TableHeaderColumn>
                    <TableHeaderColumn>Action</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                {
                  dummyData.map(data => {
                    return (
                      <TableRow key={data.no}>
                        <TableRowColumn>{data.no}</TableRowColumn>
                        <TableRowColumn>{data.title}</TableRowColumn>
                        <TableRowColumn><input type='number' value={data.qty}/></TableRowColumn>
                        <TableRowColumn>
                          <IconButton tooltip="Delete">
                            <Delete color={red800}/>
                          </IconButton>
                        </TableRowColumn>
                      </TableRow>
                    )
                  })
                }

                </TableBody>
              </Table>
              <div className='rightMenu'>
                <RaisedButton
                   label="Save Transaction"
                   labelColor={`#ffffff`}
                   backgroundColor={`#2ecc71`}
                   icon={<Done />}
                />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}
