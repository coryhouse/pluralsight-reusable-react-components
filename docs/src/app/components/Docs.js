import React from 'react';
import Title from 'react-title-component';
import {parse} from 'react-docgen';
import ProgressBarPage from './ProgressBar/Page';
import PasswordInputPage from './PasswordInput/Page';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: ''
    };
  }

  setPage(event, page) {
    event.preventDefault();
    this.setState({page: page});
  }

  getPage() {
    switch(this.state.page) {
      case 'PasswordInput':
      case '': // default page
        return <PasswordInputPage />;
      case 'ProgressBar':
        return <ProgressBarPage/>;
      default:
        throw('Unknown page ' + this.state.page);
    }
  }

  render() {
    return (
      <div>
        <div style={{float: 'left', width: 200}}>
          <ul>
            <li><a href="#" onClick={(event) => this.setPage(event, 'PasswordInput')}>PasswordInput</a></li>
            <li><a href="#" onClick={(event) => this.setPage(event, 'ProgressBar')}>ProgressBar</a></li>
          </ul>
       </div>

        <div style={{float: 'left'}}>
          {this.getPage()}
        </div>

        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}
