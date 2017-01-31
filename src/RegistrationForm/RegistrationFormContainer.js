import React from 'react';
import RegistrationForm from './RegistrationForm';

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
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user: this.state.user});
  }

  validate() {
    const errors = {};
    const user = this.state.user;
    if (!user.email) {
      errors.email = 'Email is required.';
    }

    this.setState({errors: errors});
  }

  onSubmit() {
    this.validate();
    // for simplicity, just logging. In real app, would call api.
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
