import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import client from "./store/client";
import App from "./containers/App/App";
import * as serviceWorker from './serviceWorker';

import "./index.css"

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
