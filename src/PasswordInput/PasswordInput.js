import React, { PropTypes } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import EyeIcon from '../EyeIcon/EyeIcon';

/**
 * Full-featured Password Input with integrated label, quality tips, and show password toggle.
 */
class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  toggleShowPassword(event) {
    this.setState((prevState) => {
      return { showPassword: !prevState.showPassword };
    });
    event.preventDefault();
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

  render() {
    const {value, error, name, onChange, placeholder, maxLength, minLength, showVisibilityToggle, showQuality, showTips, ...props} = this.props;
    const {showPassword} = this.state;
    const password = value || '';
    const containsAlpha = password.match(/[a-z]/g);
    const containsNumber = password.match(/\d+/g);
    const containsSpecialChar = password.match(/[^a-zA-Z0-9]+/g);
    const score = this.calculateScore(containsAlpha, containsNumber, containsSpecialChar);

    return (
      <div className="fieldset">
        <div style={{ float: 'left', width: 165 }}>
          <label htmlFor={name}>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder || ''}
            onChange={onChange}
            value={password}
            maxLength={maxLength}
            name={name}
            {...props} />
          {
            showVisibilityToggle &&
            <a
              href="#"
              onClick={this.toggleShowPassword}
              style={{marginLeft: 5}}>
              <EyeIcon />
            </a>
          }
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {
            showQuality && password.length > 0 && <ProgressBar percent={score} />
          }
        </div>
        <div style={{ float: 'left'}}>
          {
            showTips && password.length > 0 &&
            <ul className="unstyled">
              {!containsAlpha && <li>Add alphabetical character.</li>}
              {!containsNumber && <li>Add number.</li>}
              {!containsSpecialChar && <li>Add special character.</li>}
              {minLength && password.length < minLength && <li>Password must be at least {minLength} characters.</li>}
            </ul>
          }
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  /**
   * Password value
   */
  value: PropTypes.string,
  /**
   * Input name
   */
  name: PropTypes.string.isRequired,
  /**
   * Function called when password input value changes
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Max password length accepted
   */
  maxLength: PropTypes.number.isRequired,
  /**
   * Min password length accepted
   */
  minLength: PropTypes.number,
  /**
   * Placeholder displayed when no password is entered
   */
  placeholder: PropTypes.string,
  /**
   * Set to true to show the toggle for displaying the currently entered password
   */
  showVisibilityToggle: PropTypes.bool,
  /**
   * Set to true to display password quality visually via ProgressBar
   */
  showQuality: PropTypes.bool,
  /**
   * Validation error to display
   */
  error: PropTypes.string,
  /**
   * Set to true to show tips for improving the password
   */
  showTips: PropTypes.bool,
  /**
   * Object that overrides the default theme
   */
  theme: PropTypes.object
};

PasswordInput.default = {
  minLength: 5
}

export default PasswordInput;
