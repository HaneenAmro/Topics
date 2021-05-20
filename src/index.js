import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { config } from './config.js'
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


//Used Apollo Client as GraphQL library 
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers : {
    authorization: `token ${config.REACT_APP_GITHUB_TOKEN}`
  },
  cache: new InMemoryCache() 
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
