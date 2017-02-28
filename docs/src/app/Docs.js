import React from 'react';
import Title from 'react-title-component';
import {parse} from 'react-docgen';
import ProgressBarPage from './examples/ProgressBar/Page';
import PasswordInputPage from './examples/PasswordInput/Page';
import fs from 'fs';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: ''
    };
  }

  setPage(event, page) {
    event.preventDefault();
    this.setState({page});
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
    //const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p+"/"+f).isDirectory())
    return (
      <div>
        <div id="navigation">
          <ul className="unstyled">
            <li><a href="#" onClick={(event) => this.setPage(event, 'PasswordInput')}>PasswordInput</a></li>
            <li><a href="#" onClick={(event) => this.setPage(event, 'ProgressBar')}>ProgressBar</a></li>
          </ul>
       </div>

        <div id="page-wrapper">
          {this.getPage()}
        </div>

        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}
