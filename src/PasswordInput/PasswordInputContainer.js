import React from 'react';
import PasswordInput from './PasswordInput';

class PasswordInputContainer extends React.Component {
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
          onChange={(event) => this.setState({password: event.target.value})}
          value={this.state.password}
          {...this.props} />
     </div>
    )
  }
}

export default PasswordInputContainer;
