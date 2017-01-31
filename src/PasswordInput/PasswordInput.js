import React, { PropTypes } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  toggleShowPassword() {
    this.setState((prevState) => {
      return {showPassword: !prevState.showPassword};
    });
  }

  // Default calculateScore method.
  // Return a number from 0 to 100 that represents password quality.
  calculateScore(containsAlpha, containsNumber, containsSpecialChar) {
    let score = 0;
    const password = this.props.value;
    if (!password) return 0;
    if (containsAlpha) score += 10;
    if (containsNumber) score += 10;
    if (containsSpecialChar) score += 10;
    score += password.length > 7 ? 70 : password.length * 10;
    return score;
  }

  showTips() {
    const password = this.props.value;
    if (!this.props.showTips) return false;
    if (!password) return false;
    return !password.containsAlpha ||
      !password.containsNumber ||
      !password.containsSpecialChar ||
      password.length < this.props.minLength
  }

  render() {
    const {value, name, onChange, placeholder, maxLength, minLength, showVisibilityToggle, showQuality, showTips, ...props} = this.props;
    const {showPassword} = this.state;
    const password = value || '';
    const containsAlpha = password.match(/[a-z]/g);
    const containsNumber = password.match(/\d+/g);
    const containsSpecialChar = password.match(/[^a-zA-Z0-9]+/g);
    const score = this.calculateScore(containsAlpha, containsNumber, containsSpecialChar);

    return (
      <div>
        <input type={showPassword ? 'text' : 'password'}
          placeholder={placeholder || ''}
          onChange={onChange}
          value={password}
          maxLength={maxLength}
          name={name}
          {...props} />
        {" "}
        {
          showVisibilityToggle &&
          <a
            href="#"
            onClick={this.toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'} Password
          </a>
        }

        {
          showQuality && password &&
          <ProgressBar percentComplete={score} />
        }

        {
          showTips && this.showTips() &&
          <ul>
            { !containsAlpha && <li>Add alphabetical character.</li>}
            { !containsNumber && <li>Add number.</li>}
            { !containsSpecialChar && <li>Add special character.</li>}
            { minLength && password.length < minLength && <li>Password must be at least {minLength} characters.</li>}
          </ul>
        }
      </div>
    );
  }
}

PasswordInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  showVisibilityToggle: PropTypes.bool,
  showQuality: PropTypes.bool,
  showTips: PropTypes.bool
};

PasswordInput.default = {
  minLength: 5
}

export default PasswordInput;
