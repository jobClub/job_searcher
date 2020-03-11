import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const gqlClient = new ApolloClient({
    uri: 'https://api.graphql.jobs',
});

ReactDOM.render(
    <ApolloProvider client={gqlClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'))

serviceWorker.unregister();
