import React, { Component } from "react";
import { Route } from "react-router-dom";

import Demo from "../Demo/Demo";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard"
import { PrivateRoute } from "../../utils/ProvateRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/frontend/login" component={Login} />
        <Route exact path="/frontend/demo" component={Demo} />
        <PrivateRoute exact path="/frontend/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
