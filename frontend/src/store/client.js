import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";

import { defaults, resolvers } from "./resolvers";

const link = createHttpLink({
  uri: process.env.REACT_APP_BASE_URL + "/app/graphql",
  credentials: "include"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    withClientState({
      defaults,
      resolvers,
      cache
    }),
    link
  ])
});

export default client;
