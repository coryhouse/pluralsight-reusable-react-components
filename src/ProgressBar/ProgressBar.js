import React, { PropTypes } from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    if (props.percentComplete < 0 || props.percentComplete > 100) {
      throw new Error('Percent complete must be between 0 and 100.');
    }

    this.getBarColor = this.getBarColor.bind(this);
  }

  getBarColor() {
    if (this.props.percentComplete == 100) {
      return 'green';
    } else if (this.props.percentComplete > 50) {
      return 'lightgreen';
    }
    return 'red';
  }

  render() {
    return (
      <div
        className="progress-bar-wrapper"
        style={{
          width: 100,
          height: 10,
          border: '1px solid lightgray'
        }}>
        <div
          className="progress-bar"
          style={{
            width: this.props.percentComplete,
            height: 10,
            backgroundColor: this.getBarColor()
          }} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number.isRequired
};

export default ProgressBar;
