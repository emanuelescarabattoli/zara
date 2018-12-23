import React from "react";

export const Card = props => {
  return <div className="card">{props.children}</div>;
};

export const CardHeader = props => {
  return <div className="card-header">{props.children}</div>;
};

export const CardSection = props => {
  return <div className="card-section">{props.children}</div>;
};

export const CardBody = props => {
  return <div className="card-body">{props.children}</div>;
};

export const CardButtons = props => {
  return <div className="card-buttons">{props.children}</div>;
};

export default Card;