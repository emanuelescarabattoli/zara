import React from "react";
import { Link } from "react-router-dom";

const Page = props => {
  return (
    <div className="page">
      <div className="sidebar">
        <span className="logo">
          <i className="fas fa-chart-pie icon" />
          Zara
        </span>
        <div className="menu-buttons">
          <Link className="button button-light" to="/counter">
            <i className="fas fa-plus fa-spacing" />
            New counter
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="/dashboard">
              <i class="fas fa-chart-area fa-spacing" />
              Dashboard
            </Link>
          </li>
          <li>
          <Link to="/counters">
              <i className="fas fa-cube fa-spacing" />
              Counters
            </Link>
          </li>
          <li>
            <Link to="/totals">
              <i className="fas fa-cubes fa-spacing" />
              Totals
            </Link>
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
