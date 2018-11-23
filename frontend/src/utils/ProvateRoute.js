import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const QUERY = gql`
  {
    me {
      username
    }
  }
`;

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div />;
      return (
        <Route
          {...rest}
          render={props => {
            if (error || data.me.userneme) {
              return <Redirect to="/accounts/login" />;
            }
            return <Component {...props} />;
          }}
        />
      );
    }}
  </Query>
);