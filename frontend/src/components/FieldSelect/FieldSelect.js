import React from "react";

const FieldSelect = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.description}</label>
      <select name={props.name} value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <small>{props.error && props.error.messages.join(", ")}</small>
    </div>
  );
};

export default FieldSelect;
