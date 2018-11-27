import React, { Component } from "react";

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirm: false
    };
  }

  render() {
    return (
      <div className="delete">
        {!this.state.confirm ? (
          <div>
            <button className="button-icon red" onClick={() => this.setState({ confirm: true })}>
              <i className="fa fa-trash" />
            </button>
          </div>
        ) : null}
        {this.state.confirm ? (
          <div>
            <button
              className="button-icon green"
              onClick={() => {
                return this.props.onClick();
              }}
            >
              <i className="fa fa-check" />
            </button>
            <button className="button-icon red" onClick={() => this.setState({ confirm: false })}>
              <i className="fa fa-times" />
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Delete;
