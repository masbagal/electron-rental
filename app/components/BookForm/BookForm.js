import React from 'react';
import StyledInput from '../StyledInput/StyledInput';

export default class BookForm extends React.Component {
  render() {
    return (
      <div>
        <div className='paper'>
          <table className='fullWidth' id='formBook'>
            <tbody>
            <tr>
              <td colSpan={2}>
                <StyledInput
                  label='Books Title'
                  className='formBookTitle'
                />
              </td>
            </tr>
            <tr>
              <td>
                <StyledInput
                  label='Author'
                />
              </td>
              <td>
                <StyledInput
                  label='Publisher'
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <StyledInput
                  label='Notes'
                  multiline={true}
                />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className='fullWidth' style={{ marginTop: '15px', textAlign: 'right' }}>
          <button className="button-primary">Save</button>
        </div>
      </div>
    )
  }
}
