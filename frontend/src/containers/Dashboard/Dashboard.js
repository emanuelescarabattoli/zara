import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import Page from "../../components/Page/Page";
import { QUERY_LIST_TOTAL_WITH_COUNTERS } from "../../queries/index";
import { formatNumber } from "../../utils/utils";
import Content from "./Content";

import "./Dashboard.css";

class Dashboard extends Component {
  adaptList = () => {
    let result = [];
    this.props.query.listTotal.map(total => {
      let item = { title: "", data: [] };
      let totalAmount = 0;
      total.totalrowSet.map(totalRow => {
        const amount = totalRow.counter.counterrowSet.reduce((sum, value) => sum + value.amount, 0);
        item.data.push({ name: totalRow.counter.title + " (€ " + formatNumber(amount) + ")", value: Math.abs(amount) });
        totalAmount += amount;
        return null;
      });
      item.title = total.title + " (€ " + formatNumber(totalAmount) + ")"
      result.push(item);
      return null;
    });
    return result;
  };

  render() {
    let content;

    if (this.props.query.loading) {
      content = "Loading...";
    } else {
      content = <Content list={this.adaptList()} />;
    }

    return <Page title="Dashboard">{content}</Page>;
  }
}

export default compose(graphql(QUERY_LIST_TOTAL_WITH_COUNTERS, { name: "query" }))(Dashboard);
