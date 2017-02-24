import React from 'react';

export default class StyledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilled: false
    };
  }

  handleChange(e) {
    this.setState({ isFilled: e.target.value.length > 0 });
    if (typeof this.props.onChange === 'function')
      this.props.onChange(e);
  }

  render() {
    const filled = this.state.isFilled ? 'filled' : '';
    const inputField = this.props.multiline ?
      <textarea onChange={this.handleChange.bind(this)} /> :
      <input type='text' onChange={this.handleChange.bind(this)} />;

    return (
      <div className={`${this.props.className} styledInput`}>
        <label className={filled}>{this.props.label}</label>
        {inputField}
      </div>
    );
  }
}
