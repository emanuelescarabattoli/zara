import React, { Component } from "react";

import Content from "./Content";

import "./Login.css";

class Login extends Component {
  componentDidMount() {
    document.location.href = "/accounts/login";
  }

  render() {
    return <Content />;
  }
}

export default Login;
