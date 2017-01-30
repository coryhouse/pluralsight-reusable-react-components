import React, { PropTypes } from 'react';
import PasswordInput from '../PasswordInput/PasswordInput';
import TextInput from '../TextInput/TextInput';

const RegistrationForm = ({email, errors, password, onChange, onSubmit}) => {
  return (
    <div>
      <TextInput
        name="email"
        onChange={onChange}
        label="Email"
        value={email}
        error={errors ? errors.email : ''} />

      <div>
        <label htmlFor="password">Password</label><br/>
        <PasswordInput
          name="password"
          value={password}
          onChange={onChange}
          showQuality={true}
          showTips={true}
          showVisibilityToggle={true}
          maxLength={50} />
      </div>

      <div>
        <input type="submit" value="Register" onClick={onSubmit} />
      </div>
    </div>
  );
}

RegistrationForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RegistrationForm;
