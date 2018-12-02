import React from "react";

export const TwoSections = props => {
  return (
    <div className="grid">
      <div className="col-6 veritical-align-center">
        <h4 className="title-bar-title">{props.title}</h4>
      </div>
      <div className="col-6 align-right">
        {props.children}
      </div>
    </div>
  );
};

export default TwoSections;
