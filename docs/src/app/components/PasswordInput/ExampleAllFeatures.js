import React from 'react';
// Note that the handy index.js in each component folder gives me a handy shortcut
// to avoid having to type the name of the component twice below (once for folder
// and once for filename.)
import PasswordInput from 'pluralsight-ui/PasswordInput';

/**
 * PasswordInput with all features enabled
 */
class PasswordInputExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  render() {
    return (
      <div>
        <PasswordInput
          name="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          maxLength={50}
          placeholder="Enter password"
          showVisibilityToggle={true}
          showQuality={true}
          showTips={true}
          {...this.props} />
      </div>
    )
  }
}

export default PasswordInputExample;
