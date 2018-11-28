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
      title
    }
  }
`;

export const MUTATION_CREATE_COUNTER = gql`
  mutation createCounter($title: String!) {
    mutationCounter(input: { title: $title }) {
      clientMutationId
      errors {
        field
        messages
      }
    }
  }
`;

export const MUTATION_UPDATE_COUNTER = gql`
  mutation updateCounter($id: Int!, $title: String!) {
    mutationCounter(input: { id: $id, title: $title }) {
      clientMutationId
      errors {
        field
        messages
      }
    }
  }
`;
