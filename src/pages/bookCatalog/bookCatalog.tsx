import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookIcon from '@mui/icons-material/Book';
import BookCard from '../../components/BookCard';
import { TBook } from '../../types/book.type';
import { useStore } from '../../stores/BookCatalogStore';

const theme = createTheme();

const BookCatalog: React.FunctionComponent<{books: Array<TBook>}> = observer(props => {
  const history = useHistory();
  const store = useStore();

  function onClickBook (id: string): void {
    history.push(`/books/${id}`);
  };

  const { books } = store;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BookIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            <FormattedMessage
              id="app.name"
            />
          </Typography>
        </Toolbar>
      </AppBar>
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
    </ThemeProvider>
  );
});

export default BookCatalog;
