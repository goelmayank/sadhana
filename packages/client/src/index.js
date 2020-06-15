import React from "react";
import ReactDOM from "react-dom";

import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloProvider} from "@apollo/react-hooks";
import {Routes} from './pages/Routes'
import injectStyles from "./styles";
import {Navbar} from './components/Navbar'

// Set up our apollo-client to point at the server we created this can be local
// or a remote endpoint
const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: "http://localhost:4000/graphql",
        headers: {
            authorization: localStorage.getItem("token"),
            "client-name": "Sadhana App [web]",
            "client-version": "1.0.0"
        }
    })
});

/**
 * Render our app
 * - We wrap the whole app with ApolloProvider, so any component in the app can
 *    make GraphqL requests. Our provider needs the client we created above,
 *    so we pass it as a prop
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */

injectStyles();
ReactDOM.render(
    <ApolloProvider client={client}>
    <Navbar></Navbar>
    <Routes/>
</ApolloProvider>, document.getElementById("root"));
