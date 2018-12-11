import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { QUERY_LIST_TOTAL, MUTATION_DELETE_TOTAL } from "../../queries/index";
import Page from "../../components/Page/Page";
import List from "./List";

import "./Totals.css";

class Totals extends Component {
  onDelete = id => {
    this.props.delete({ variables: { pk: id } });
  };

  render() {
    let content;

    if (this.props.query.loading) {
      content = "Loading...";
    } else {
      content = <List list={this.props.query.listTotal} onDelete={this.onDelete} />;
    }

    return <Page title="Totals">{content}</Page>;
  }
}

export default compose(
  graphql(QUERY_LIST_TOTAL, {
    name: "query",
    options: { notifyOnNetworkStatusChange: true }
  }),
  graphql(MUTATION_DELETE_TOTAL, {
    name: "delete",
    options: { refetchQueries: [{ query: QUERY_LIST_TOTAL }] }
  })
)(Totals);
