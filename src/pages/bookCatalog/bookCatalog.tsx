import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookCard from '../../components/BookCard';
import { TBook } from '../../types/book.type';
import { useStore } from '../../stores/BookCatalogStore';

const BookCatalog: React.FunctionComponent<{books: Array<TBook>}> = observer(props => {
  const history = useHistory();
  const store = useStore();

  function onClickBook (id: string): void {
    history.push(`/books/${id}`);
  };

  const { books } = store;

  return (
      <main>
        {books.length > 0
          ? <Container sx={{ py: 8 }} maxWidth="md">
              <Stack spacing={4}>
                {books.map((book) => (
                  <BookCard key={book.id} book={book} onClick={() => onClickBook(book.id)} />
                ))}
              </Stack>
            </Container>
          : <Box><Typography><FormattedMessage id="app.noBooks" /></Typography></Box>
        }
      </main>
  );
});

export default BookCatalog;
