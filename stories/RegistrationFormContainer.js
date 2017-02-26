import React from 'react';
import RegistrationForm from '../src/RegistrationForm';

class RegistrationFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const {user} = this.state;
    user[event.target.name] = event.target.value;
    // Using short-hand notation
    this.setState({ user });
  }

  validate() {
    const errors = {};
    const {user} = this.state;
    if (!user.email) {
      errors.email = 'Email required.';
    }
    if (!user.password) {
      errors.password = 'Password required.';
    }

    this.setState({ errors: errors });
  }

  onSubmit() {
    this.validate();
    // for simplicity, just logging. In real app, would call web api.
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <RegistrationForm
          email={this.state.user.email}
          password={this.state.user.password}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          errors={this.state.errors} />
      </div>
    )
  }
}

export default RegistrationFormContainer;
