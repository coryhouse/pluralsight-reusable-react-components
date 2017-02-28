import React from 'react';
import PasswordInput from 'pluralsight-ui/PasswordInput';

/**
 * All features enabled
 */
class ExampleAllFeatures extends React.Component {
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

export default ExampleAllFeatures;
