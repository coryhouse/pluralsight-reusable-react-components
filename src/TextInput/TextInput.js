import React, {PropTypes} from 'react';
import styles from '../styles';

const TextInput = ({name, label, onChange, placeholder, value, error, ...props}) => {
  let inputStyle = {};
  if (error && error.length > 0) {
    inputStyle = {
      border: 'solid 1px red'
     }
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
          {...props}/>
        {error && <div style={{ color: 'red'}}>{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
