import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookIcon from '@mui/icons-material/Book';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import { TBook } from '../../types/book.type';

const theme = createTheme();

const BookCatalog: React.FunctionComponent<{books: Array<TBook>}> = props => {
  const history = useHistory();

  function onClickBook (id: string): void {
    history.push(`/books/${id}`);
  };

  // const { books } = props;
  const books = [
    {
      id: 'z23e35',
      title: 'Love and Peace',
      year: 1982,
      description: ''
    },
    {
      id: 'h56fe3',
      title: 'Cooking With Spice',
      year: 1992,
      description: ''
    },
    {
      id: '8s38r0',
      title: 'A Trilogy',
      year: 1930,
      description: ''
    }
  ];
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
        <Container sx={{ py: 8 }} maxWidth="md">
          <Stack spacing={4}>
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => onClickBook(book.id)} />
            ))}
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default BookCatalog;
