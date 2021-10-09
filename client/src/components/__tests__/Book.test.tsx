import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from '../Book';
import { TBook } from '../../types/book.type';
import { IntlProvider } from 'react-intl';

const book: TBook = {
  id: 'qsd31d',
  title: 'A Book Title',
  description: 'Lorem Ipsum',
  year: 1983
};

test('it renders with the title', () => {
  render(<IntlProvider locale='en' messages={{ 'book.publishedIn': 'published in' }}><Book book={book} /></IntlProvider>);
  expect(screen.getByText(new RegExp(book.title, 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(book.year.toString(), 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(book.description, 'i'))).toBeInTheDocument();
});
