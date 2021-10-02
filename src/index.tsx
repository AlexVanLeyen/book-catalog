import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import Application from './application';
import reportWebVitals from './reportWebVitals';
import English from './lang/en.json';

const locale = navigator.language;
const lang = English;

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={lang}>
      <Application />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
