import React from "react";
import { Link } from "react-router-dom";
import TwoSections from "../TwoSections/TwoSections";

const Page = props => (
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
            <i className="fas fa-chart-area fa-spacing" />
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
      <div className="title">
        <TwoSections title={props.title}>
          <a className="logout" href="/accounts/logout">
            <i className="fas fa-sign-out-alt  fa-spacing" />
            Logout
          </a>
        </TwoSections>
      </div>
      <div className="main">{props.children}</div>
    </div>
  </div>
);

export default Page;
