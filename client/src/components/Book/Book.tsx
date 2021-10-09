import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { TBook } from '../../types/book.type';

export type TBookProps = {
  book: TBook;
}

const Book: React.FunctionComponent<TBookProps> = ({ book }) => {
  const { title, year, description } = book;

  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body2"><FormattedMessage id="book.publishedIn" /> {year}</Typography>
      <Divider sx={{ p: 2 }}/>
      <Typography variant="body1">{description}</Typography>
    </>
  );
};

export default Book;
