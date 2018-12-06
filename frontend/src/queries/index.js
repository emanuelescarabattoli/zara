import gql from "graphql-tag";

export const QUERY_LIST_COUNTER = gql`
  {
    listCounter {
      id
      title
    }
  }
`;

export const MUTATION_DELETE_COUNTER = gql`
  mutation mutationDeleteCounter($pk: Int!) {
    mutationDeleteCounter(pk: $pk) {
      success
    }
  }
`;

export const QUERY_DETAIL_COUNTER = gql`
  query($id: Int) {
    detailCounter(id: $id) {
      id
      title
      counterrowSet {
        id
        date
        description
        period
        amount
      }
    }
  }
`;

export const MUTATION_CREATE_COUNTER = gql`
  mutation createCounter($title: String!) {
    mutationCounter(input: { title: $title }) {
      counter {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;

export const MUTATION_UPDATE_COUNTER = gql`
  mutation updateCounter($id: ID!, $title: String!) {
    mutationCounter(input: { id: $id, title: $title }) {
      counter {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;

export const MUTATION_CREATE_COUNTER_ROW = gql`
  mutation mutationCounterRow($counter: ID!, $date: Date!, $description: String!, $period: String!, $amount: Float!) {
    mutationCounterRow(
      input: { counter: $counter, date: $date, description: $description, period: $period, amount: $amount }
    ) {
      counterRow {
        id
      }
      errors {
        messages
      }
    }
  }
`;

export const MUTATION_UPDATE_COUNTER_ROW = gql`
  mutation mutationCounterRow(
    $id: ID!
    $counter: ID!
    $date: Date!
    $description: String!
    $period: String!
    $amount: Float!
  ) {
    mutationCounterRow(
      input: { id: $id, counter: $counter, date: $date, description: $description, period: $period, amount: $amount }
    ) {
      counterRow {
        id
      }
      errors {
        messages
      }
    }
  }
`;
