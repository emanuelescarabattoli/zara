import React from "react";

export const Card = props => {
  return <div className="card">{props.children}</div>;
};

export const CardBody = props => {
  return <div className="card-body">{props.children}</div>;
};

export default Card;