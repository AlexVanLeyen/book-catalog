import React from 'react';
import { render, screen } from '@testing-library/react';
import CatalogItem from '../CatalogItem';
import { TBook } from '../../types/book.type';
import userEvent from '@testing-library/user-event';

const title = 'A Book Title';
const book: TBook = {
  id: '',
  title,
  description: '',
  year: 0
};

test('it renders with the title', () => {
  render(<CatalogItem item={book} />);
  expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
});

test('it triggers onClick', () => {
  const onClick = jest.fn();
  render(<CatalogItem item={book} onClick={onClick}/>);
  userEvent.click(screen.getByTestId('onclick-book-card'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
