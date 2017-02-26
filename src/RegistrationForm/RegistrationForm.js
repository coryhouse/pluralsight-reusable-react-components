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
        error={errors.email} />

      <PasswordInput
        name="password"
        value={password}
        onChange={onChange}
        showQuality={true}
        showTips={true}
        showVisibilityToggle={true}
        minLength={7}
        maxLength={50}
        error={errors.password} />
      <div>
        <input type="submit" value="Register" onClick={onSubmit} />
      </div>
    </div>
  );
}

RegistrationForm.propTypes = {
  /**
   * User email address
   */
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RegistrationForm;
