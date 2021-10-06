import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookCard from '../../components/BookCard';
import { TBook } from '../../types/book.type';
import { useQuery, gql } from '@apollo/client';

export const BOOKS = gql`
query Books {
  books {
    id
    title
    year
    description
  }
}
`;

const BookCatalog: React.FunctionComponent<{books: Array<TBook>}> = () => {
  const history = useHistory();
  const { data } = useQuery(BOOKS);

  function onClickBook (id: string): void {
    history.push(`/books/${id}`);
  };

  return (
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
        {data && data.books && data.books.length > 0
          ? <Stack spacing={4}>
                {data.books.map((book: any) => (
                  <BookCard key={book.id} book={book} onClick={() => onClickBook(book.id)} />
                ))}
            </Stack>
          : <Box><Typography><FormattedMessage id="app.noBooks" /></Typography></Box>
        }
        </Container>
      </main>
  );
};

export default BookCatalog;
