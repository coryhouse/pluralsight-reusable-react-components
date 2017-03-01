import React, {PropTypes} from 'react';

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
    return (
      <div className="example-wrapper">
        <p>
          {description}
        </p>

        {children}
        <a href="#" onClick={this.toggleCode.bind(this)}>
          {showCode ? "Hide" : "Show"} Code</a>
        {showCode && <pre>{code}</pre>}
      </div>
    )
  }
}

Example.propTypes = {
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default Example;
