import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CatalogItem from '../../components/CatalogItem';
import { TBook } from '../../types/book.type';
import { useQuery, gql } from '@apollo/client';

export const BOOKS = gql`
query GetBooks {
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
  const { data, loading, error } = useQuery(BOOKS);
  function onClickBook (id: string): void {
    history.push(`/books/${id}`);
  };

  return (
      <main>
        { loading && <LinearProgress /> }
        <Container sx={{ py: 8 }} maxWidth="md">
          { error && <Alert severity="error"><FormattedMessage id="bookCatalog.error" /></Alert> }
          { !loading && !error &&
            <>
              {data && data.books && data.books.length > 0
                ? <Stack spacing={4}>{data.books.map((book: any) => (
                    <CatalogItem key={book.id} item={book} onClick={() => onClickBook(book.id)} />
                ))}</Stack>
                : <Card>
                    <CardContent >
                      <Typography sx={{ textAlign: 'center' }}><FormattedMessage id="app.noBooks" /></Typography>
                    </CardContent>
                  </Card>
              }
            </>
          }
        </Container>
      </main>
  );
};

export default BookCatalog;
