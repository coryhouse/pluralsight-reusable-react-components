import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, ...props}) => {
  let inputStyle = {};
  if (error && error.length > 0) {
    inputStyle = {
      border: 'solid 1px red'
     }
  }

  return (
    <div className="fieldset">
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
  /**
   * Input name
   */
  name: PropTypes.string.isRequired,
  /**
   * Input label
   */
  label: PropTypes.string.isRequired,
  /**
   * Function to call onChange
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Placeholder to display when empty
   */
  placeholder: PropTypes.string,
  /**
   * Value
   */
  value: PropTypes.string,
  /**
   * String to display when error occurs
   */
  error: PropTypes.string
};

export default TextInput;
