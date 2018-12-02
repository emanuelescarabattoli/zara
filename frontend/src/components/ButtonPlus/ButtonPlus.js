import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return <Link className="button plus-button" to={props.link}><i className="fas fa-plus" /></Link>;
};

export default Button;