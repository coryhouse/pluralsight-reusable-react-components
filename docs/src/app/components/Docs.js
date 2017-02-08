import React from 'react';
import Title from 'react-title-component';
import {parse} from 'react-docgen';
import ProgressBarPage from './ProgressBar/ProgressBarPage';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: ''
    };
  }

  loadPage(page) {
    this.setState({page: page});
  }

  render() {
    return (
      <div>
        <div style={{float: 'left', width: 200}}>
          <a href="#" onClick={() => loadPage('ProgressBar')}>ProgressBar</a>
        </div>

        <div style={{float: 'left'}}>
          {this.page == '' ? <ProgressBarPage/> : <ProgressBarPage/>}
        </div>
        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}
