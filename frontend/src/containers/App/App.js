import React, { Component } from "react";
import { Route } from "react-router-dom";

import { PrivateRoute } from "../../utils/ProvateRoute";
import Demo from "../Demo/Demo";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard"
import Counters from "../Counters/Counters"
import Counter from "../Counter/Counter"
import Totals from "../Totals/Totals"
import Total from "../Total/Total"

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/login" component={Login} />
        <Route exact path="/demo" component={Demo} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/counters" component={Counters} />
        <PrivateRoute exact path="/counter" component={Counter} />
        <PrivateRoute exact path="/counter/:id" component={Counter} />
        <PrivateRoute exact path="/totals" component={Totals} />
        <PrivateRoute exact path="/total" component={Total} />
        <PrivateRoute exact path="/total/:id" component={Total} />
      </>
    );
  }
}

export default App;
