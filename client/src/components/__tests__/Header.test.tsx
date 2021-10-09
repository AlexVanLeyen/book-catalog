import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';
import { IntlProvider } from 'react-intl';

test('it renders with title', () => {
  const locale = 'en';
  const messages = {
    'app.name': 'Hello World'
  };

  render(<IntlProvider locale={locale} messages={messages}><Header /></IntlProvider>);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
