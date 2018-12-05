import React from "react";

const FieldText = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.description}</label>
      <input
        name={props.name}
        type={props.type ? props.type : "text"}
        value={props.value}
        onChange={props.onChange}
      />
      <small>{props.error && props.error.messages.join(", ")}</small>
    </div>
  );
};

export default FieldText;
