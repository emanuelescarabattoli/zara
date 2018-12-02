import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { QUERY_LIST_COUNTER, MUTATION_DELETE_COUNTER } from "../../queries/index";
import Page from "../../components/Page/Page";
import List from "./List";

import "./Counters.css";

class Counters extends Component {
  onDelete = id => {
    this.props.delete({ variables: { pk: id } });
  }

  render() {
    let content;

    if (this.props.query.loading) {
      content = "Loading...";
    } else {
      content = <List list={this.props.query.listCounter} onDelete={this.onDelete} />;
    }

    return <Page title="Counters">{content}</Page>;
  }
}

export default compose(
  graphql(QUERY_LIST_COUNTER, { name: "query", options: { notifyOnNetworkStatusChange: true } }),
  graphql(MUTATION_DELETE_COUNTER, {
    name: "delete",
    options: { refetchQueries: [{ query: QUERY_LIST_COUNTER }] }
  })
)(Counters);
