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
      <div className="example-wrapper">
        <p>
          {info.description}
        </p>

        {children}

        <p>
          <a href="#" onClick={this.toggleCode.bind(this)}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <pre>{code}</pre>}
      </div>
    )
  }
}

Example.propTypes = {
  code: PropTypes.string.isRequired
}

export default Example;
