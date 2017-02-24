import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';

const style = {
  padding: '20px'
};

export default class BookForm extends React.Component {
  static getPropTypes() {
    return {
      bookList: React.Proptypes.array
    };
  }

  render() {
    return (
      <div className='row' style={{ marginTop: '20px' }}>
        <div className='row'>
          <span>Filter</span>
          <input type="text" placeholder="Title" style={{ marginLeft: '20px' }} />
        </div>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hujan Bulan Juni</td>
              <td>Sapardi Djoko Damono</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <div className='columns six'>
          <ul className='pagination'>
            <li>&lt</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    )
  }
}
