import React from 'react';
import PasswordInput from './PasswordInput';

class PasswordInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        password: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user: this.state.user});
  }

  render() {
    return (
      <div>
        <PasswordInput
            maxLength={20}
            value="">
        </PasswordInput>
     </div>
    )
  }
}

export default PasswordInputContainer;
