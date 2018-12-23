import React, { Component } from "react";

import Content from "./Content";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => this.setState({ ...this.state.detail, [e.target.name]: e.target.value });

  onLogin = () => {
    fetch("http://localhost:8000/accounts/login", {
      method: "POST",
      mode:'no-cors',
      credentials: "include",
      body: { username: this.state.username, password: this.state.password }
    });
  };

  render() {
    return (
      <Content
        username={this.state.username}
        password={this.props.password}
        onChange={this.onChange}
        onLogin={this.onLogin}
      />
    );
  }
}

export default Login;
