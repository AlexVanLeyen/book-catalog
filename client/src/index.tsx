import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import English from './lang/en.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const locale = navigator.language;
const lang = English;

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI ?? 'http://localhost:4000',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={lang}>
      <ApolloProvider client={client}>
        <Application />
      </ApolloProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
