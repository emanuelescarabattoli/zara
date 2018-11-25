import React from "react";

const Page = props => {
  return (
    <div className="page">
      <div className="sidebar">
        <span className="logo">
          <i className="fas fa-chart-pie icon" />
          Zara
        </span>
        <div className="menu-buttons">
          <button className="button-light"><i className="fas fa-plus fa-spacing" />New counter</button>
        </div>
        <ul className="menu">
          <li>
          <i class="fas fa-chart-area fa-spacing"></i>
            Dashboard
          </li>
          <li>
            <i className="fas fa-cube fa-spacing" />
            Counters
          </li>
          <li>
            <i className="fas fa-cubes fa-spacing" />
            Totals
          </li>
        </ul>
      </div>
      <div className="content">
        <span className="title">{props.title}</span>
        <div className="main">{props.children}</div>
      </div>
    </div>
  );
};

export default Page;
