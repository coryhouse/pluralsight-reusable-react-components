import React, { PropTypes } from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.getBarColor = this.getBarColor.bind(this);
  }

  getBarColor() {
    if (this.props.percent == 100) {
      return 'green';
    } else if (this.props.percent > 50) {
      return 'lightgreen';
    }
    return 'red';
  }

  render() {
    const height = this.props.height || 10;

    let containerStyle = {
      width: 100,
      height: height,
      border: '1px solid lightgray'
    };

    let barStyle = {
      width: this.props.percent,
      height: height,
      backgroundColor: this.getBarColor()
    };

    return (
      <div style={containerStyle}>
        <div style={barStyle} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  height: PropTypes.number
};

export default ProgressBar;
