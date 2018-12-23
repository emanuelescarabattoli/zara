import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import {
  QUERY_DETAIL_TOTAL,
  MUTATION_CREATE_TOTAL,
  MUTATION_UPDATE_TOTAL,
  QUERY_LIST_TOTAL,
  MUTATION_CREATE_TOTAL_ROW,
  MUTATION_UPDATE_TOTAL_ROW,
  MUTATION_DELETE_TOTAL_ROW,
  QUERY_LIST_COUNTER
} from "../../queries/index";
import Page from "../../components/Page/Page";
import Detail from "./Detail";

import "./Total.css";

class Total extends Component {
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
    if (props.query.detailTotal) {
      this.setState({ id: props.match.params.id });
      this.setState({ detail: props.query.detailTotal });
    }
  }

  onSave = () => this.save().then(response => this.errorOrRedirect(response));

  onSaveRow = () => this.saveRow().then(response => this.errorOrCloseModal(response));

  save = () => {
    if (this.state.id) {
      return this.props.update({
        variables: { id: this.state.id, title: this.state.detail.title }
      });
    }
    return this.props.create({ variables: { ...this.state.detail } });
  };

  saveRow = () => {
    if (this.state.rowDetail.id) {
      return this.props.updateRow({
        variables: { ...this.state.rowDetail, total: this.state.id }
      });
    }
    return this.props.createRow({
      variables: { ...this.state.rowDetail, total: this.state.id }
    });
  };

  error = response => this.setState({ errors: response.data.mutationTotal.errors });

  errorRow = response => this.setState({ rowErrors: response.data.mutationTotalRow.errors });

  resetRow = () =>
    this.setState({
      rowDetail: { counter: 0 },
      rowErrors: []
    });

  errorOrRedirect = response => {
    if (response.data.mutationTotal.errors.length > 0) {
      return this.error(response);
    }
    return this.props.history.push("/total/" + response.data.mutationTotal.total.id);
  };

  errorOrOpenModalOnAdd = response => {
    if (response.data.mutationTotal.errors.length > 0) {
      return this.error(response);
    }
    this.resetRow();
    return this.openModal();
  };

  errorOrOpenModalOnEdit = (response, id) => {
    if (response.data.mutationTotal.errors.length > 0) {
      return this.error(response);
    }

    const detail = this.state.detail.totalrowSet.find(row => row.id === id);

    this.setState({ rowDetail: detail });

    return this.openModal();
  };

  errorOrCloseModal = response => {
    if (response.data.mutationTotalRow.errors.length > 0) {
      this.errorRow(response);
    }
    this.resetRow();
    return this.closeModal();
  };

  openModal = () => this.setState({ modalVisible: true });

  closeModal = () => this.setState({ modalVisible: false });

  clickAdd = () => this.save().then(response => this.errorOrOpenModalOnAdd(response));

  onChange = e =>
    this.setState({
      detail: { ...this.state.detail, [e.target.name]: e.target.value }
    });

  onChangeRow = e =>
    this.setState({
      rowDetail: { ...this.state.rowDetail, [e.target.name]: e.target.value }
    });

  clickEdit = id => this.save().then(response => this.errorOrOpenModalOnEdit(response, id));

  clickDelete = id => this.props.delete({ variables: { pk: id } });

  buttonAddDisabled = () => this.state.id === 0;

  adaptCounterList = () => {
    let result = [];
    this.props.queryListCounter.listCounter.map(counter => result.push({ value: counter.id, label: counter.title }));
    return result;
  };

  adaptTotalRowList = () => {
    let result = [];
    this.state.detail.totalrowSet.map(totalRow => {
      const amount = totalRow.counter.counterrowSet.reduce((sum, value) => sum + value.amount, 0);
      result.push({ ...totalRow, amount });
    });
    return result;
  };

  render() {
    let content;

    if (this.props.query.loading || this.props.queryListCounter.loading) {
      content = "Loading...";
    } else {
      content = (
        <Detail
          detail={this.state.detail}
          onChange={this.onChange}
          onSave={this.onSave}
          errors={this.state.errors}
          list={this.adaptTotalRowList()}
          clickAdd={this.clickAdd}
          closeModal={this.closeModal}
          modalVisible={this.state.modalVisible}
          rowDetail={this.state.rowDetail}
          rowErrors={this.state.rowErrors}
          onChangeRow={this.onChangeRow}
          onSaveRow={this.onSaveRow}
          clickEdit={this.clickEdit}
          clickDelete={this.clickDelete}
          buttonAddDisabled={this.buttonAddDisabled()}
          counterList={this.adaptCounterList()}
        />
      );
    }

    return <Page title="Total">{content}</Page>;
  }
}

export default compose(
  graphql(QUERY_DETAIL_TOTAL, {
    name: "query",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      variables: { id: props.match.params.id },
      fetchPolicy: "network-only"
    })
  }),
  graphql(MUTATION_CREATE_TOTAL, {
    name: "create",
    options: { refetchQueries: [{ query: QUERY_LIST_TOTAL }] }
  }),
  graphql(MUTATION_UPDATE_TOTAL, {
    name: "update",
    options: { refetchQueries: [{ query: QUERY_LIST_TOTAL }] }
  }),
  graphql(MUTATION_CREATE_TOTAL_ROW, {
    name: "createRow",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      refetchQueries: [
        {
          query: QUERY_DETAIL_TOTAL,
          variables: { id: props.match.params.id }
        }
      ]
    })
  }),
  graphql(MUTATION_UPDATE_TOTAL_ROW, {
    name: "updateRow",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      refetchQueries: [
        {
          query: QUERY_DETAIL_TOTAL,
          variables: { id: props.match.params.id }
        }
      ]
    })
  }),
  graphql(MUTATION_DELETE_TOTAL_ROW, {
    name: "delete",
    options: props => ({
      notifyOnNetworkStatusChange: true,
      refetchQueries: [
        {
          query: QUERY_DETAIL_TOTAL,
          variables: { id: props.match.params.id }
        }
      ]
    })
  }),
  graphql(QUERY_LIST_COUNTER, { name: "queryListCounter" })
)(Total);
