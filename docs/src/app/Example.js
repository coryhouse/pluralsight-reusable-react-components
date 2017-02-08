import React, {PropTypes} from 'react';
import {parse} from 'react-docgen';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCode: false
    };
  }

  toggleCode(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {children, code} = this.props;
    const {showCode} = this.state;
    const info = parse(code);
    return (
      <div>
        <p>{info.description}</p>
        {children}
        <a href="#" onClick={this.toggleCode.bind(this)}>
          {showCode ? "Hide" : "Show"} Code</a>
        {showCode && <pre>{code}</pre>}
      </div>
    )
  }
}

Example.propTypes = {
  code: PropTypes.string.isRequired
}

export default Example;
