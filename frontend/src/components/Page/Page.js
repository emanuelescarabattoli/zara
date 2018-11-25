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
            <i className="fas fa-home fa-spacing" />
            Dashboard
          </li>
          <li>
            <i className="fas fa-archive fa-spacing" />
            Archive
          </li>
          <li>
            <i className="fas fa-cog fa-spacing" />
            Settings
          </li>
        </ul>
      </div>
      <div className="content">
        <span className="title">Dashboard</span>
        <div className="main">a</div>
      </div>
    </div>
  );
};

export default Page;
