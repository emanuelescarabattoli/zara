import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import {
  QUERY_DETAIL_COUNTER,
  MUTATION_CREATE_COUNTER,
  MUTATION_UPDATE_COUNTER,
  QUERY_LIST_COUNTER,
  MUTATION_CREATE_COUNTER_ROW,
  MUTATION_UPDATE_COUNTER_ROW
} from "../../queries/index";
import Page from "../../components/Page/Page";
import Detail from "./Detail";

import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      detail: { title: "" },
      errors: [],
      rowDetail: { description: "", date: "", period: "", amount: "" },
      rowErrors: [],
      modalVisible: false
    };
  }

  componentWillReceiveProps(props) {
    if (props.query.detailCounter) {
      this.setState({ id: props.match.params.id });
      this.setState({ detail: props.query.detailCounter });
    }
  }

  onSave = () => this.save().then(response => this.errorOrRedirect(response));

  onSaveRow = () => this.saveRow().then(response => this.errorOrCloseModal(response));

  save = () => {
    if (this.state.id) {
      return this.props.update({ variables: { id: this.state.id, title: this.state.detail.title } });
    }
    return this.props.create({ variables: { title: this.state.detail.title } });
  };

  saveRow = () => {
    if (this.state.rowDetail.id) {
      return this.props.updateRow({ variables: { ...this.state.rowDetail, counter: this.state.id } });
    }
    return this.props.createRow({
      variables: {
        counter: this.state.id,
        description: this.state.rowDetail.description,
        date: this.state.rowDetail.date,
        period: this.state.rowDetail.period,
        amount: this.state.rowDetail.amount
      }
    });
  };

  error = response => this.setState({ errors: response.data.mutationCounter.errors });

  errorRow = response => this.setState({ rowErrors: response.data.mutationCounterRow.errors });

  resetRow = () => this.setState({ rowDetail: { description: "", date: "", period: "", amount: "" }, rowErrors: [] });

  errorOrRedirect = response => {
    if (response.data.mutationCounter.errors.length > 0) {
      return this.error(response);
    }
    return this.props.history.push("/counters");
  };

  errorOrOpenModalOnAdd = response => {
    if (response.data.mutationCounter.errors.length > 0) {
      return this.error(response);
    }
    this.resetRow();
    return this.openModal();
  };

  errorOrOpenModalOnEdit = (response, id) => {
    if (response.data.mutationCounter.errors.length > 0) {
      return this.error(response);
    }

    const detail = this.state.detail.counterrowSet.find(row => row.id === id);

    this.setState({ rowDetail: detail });

    return this.openModal();
  };

  errorOrCloseModal = response => {
    if (response.data.mutationCounterRow.errors.length > 0) {
      this.errorRow(response);
    }
    this.resetRow();
    return this.closeModal();
  };

  openModal = () => this.setState({ modalVisible: true });

  closeModal = () => this.setState({ modalVisible: false });

  clickAdd = () => this.save().then(response => this.errorOrOpenModalOnAdd(response));

  onChange = e => this.setState({ detail: { ...this.state.detail, [e.target.name]: e.target.value } });

  onChangeRow = e => this.setState({ rowDetail: { ...this.state.rowDetail, [e.target.name]: e.target.value } });

  clickEdit = id => this.save().then(response => this.errorOrOpenModalOnEdit(response, id));

  render() {
    let content;

    if (this.props.query.loading) {
      content = "Loading...";
    } else {
      content = (
        <Detail
          detail={this.state.detail}
          onChange={this.onChange}
          onSave={this.onSave}
          errors={this.state.errors}
          list={this.state.detail.counterrowSet}
          clickAdd={this.clickAdd}
          closeModal={this.closeModal}
          modalVisible={this.state.modalVisible}
          rowDetail={this.state.rowDetail}
          rowErrors={this.state.rowErrors}
          onChangeRow={this.onChangeRow}
          onSaveRow={this.onSaveRow}
          clickEdit={this.clickEdit}
        />
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
      variables: { id: props.match.params.id },
      fetchPolicy: "network-only"
    })
  }),
  graphql(MUTATION_CREATE_COUNTER, {
    name: "create",
    options: { refetchQueries: [{ query: QUERY_LIST_COUNTER }] }
  }),
  graphql(MUTATION_UPDATE_COUNTER, {
    name: "update",
    options: { refetchQueries: [{ query: QUERY_LIST_COUNTER }] }
  }),
  graphql(MUTATION_CREATE_COUNTER_ROW, {
    name: "createRow",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      refetchQueries: [{ query: QUERY_DETAIL_COUNTER, variables: { id: props.match.params.id } }]
    })
  }),
  graphql(MUTATION_UPDATE_COUNTER_ROW, {
    name: "updateRow",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      refetchQueries: [{ query: QUERY_DETAIL_COUNTER, variables: { id: props.match.params.id } }]
    })
  }),
)(Counter);
