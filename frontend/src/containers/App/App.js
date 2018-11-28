import React, { Component } from "react";
import { Route } from "react-router-dom";

import { PrivateRoute } from "../../utils/ProvateRoute";
import Demo from "../Demo/Demo";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard"
import Counters from "../Counters/Counters"
import Counter from "../Counter/Counter"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/demo" component={Demo} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/counters" component={Counters} />
        <PrivateRoute exact path="/counter" component={Counter} />
        <PrivateRoute exact path="/counter/:id" component={Counter} />
      </div>
    );
  }
}

export default App;
