import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Field = (props) => (

  <div className="field">

    <label>{props.label}</label>
    {props.fieldType === 'textarea' && (
      <textarea onChange={props.onChange}>
        {props.value}
      </textarea>
    )}

    {props.fieldType !== 'textarea' && (
      <input
        type={props.fieldType}
        onChange={props.onChange}
        value={props.value}
      />
    )}

  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

Field.defaultProps = {
  fieldType: 'text',
};

export default Field;
