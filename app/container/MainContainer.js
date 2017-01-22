import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MainContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
