import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import {
  QUERY_DETAIL_COUNTER,
  MUTATION_CREATE_COUNTER,
  MUTATION_UPDATE_COUNTER,
  QUERY_LIST_COUNTER
} from "../../queries/index";
import Page from "../../components/Page/Page";
import Detail from "./Detail";

import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      detail: {
        title: ""
      },
      errors: {
        messages: []
      }
    };
  }

  componentWillReceiveProps(props) {
    if (props.query.detailCouner) {
      this.setState({ id: props.match.params.id });
      this.setState({ detail: props.query.detailCouner });
    }
  }

  onChange(detail) {
    this.setState({ detail });
  }

  onSave() {
    if (this.state.id) {
      return this.props
        .update({ variables: { id: this.state.id, title: this.state.detail.title } })
        .then(response => response);
    }
    return this.props.create({ variables: { title: this.state.detail.title } }).then(response => response);
  }

  render() {
    let content;

    if (this.props.query.loading) {
      content = "Loading...";
    } else {
      content = (
        <Detail detail={this.state.detail} onChange={detail => this.onChange(detail)} errors={this.state.errors} />
      );
    }

    return <Page title="Counter">{content}</Page>;
  }
}

export default compose(
  graphql(QUERY_DETAIL_COUNTER, {
    name: "query",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      variables: { id: props.match.params.id }
    })
  }),
  graphql(MUTATION_CREATE_COUNTER, {
    name: "create",
    options: { refetchQueries: [{ query: QUERY_LIST_COUNTER }] }
  }),
  graphql(MUTATION_UPDATE_COUNTER, {
    name: "update",
    options: { refetchQueries: [{ query: QUERY_LIST_COUNTER }] }
  })
)(Counter);
