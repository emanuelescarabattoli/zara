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
