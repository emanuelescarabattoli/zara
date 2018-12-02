import React from "react";

const FieldText = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.description}</label>
      <input
        name={props.name}
        type={props.type ? props.type : "text"}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
      <small>{props.error && props.error.messages.join(", ")}</small>
    </div>
  );
};

export default FieldText;
