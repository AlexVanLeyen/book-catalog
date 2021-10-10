import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useQuery, gql } from '@apollo/client';
import BookComponent from '../../components/Book';

export type TParams = { id: string };

export const BOOK_QUERY = gql`
query Book($bookId: String!) {
  book(id: $bookId) {
    id
    title
    year
    description
  }
}
`;

const Book: React.FunctionComponent<RouteComponentProps<TParams>> = ({ match }) => {
  const { data, loading, error } = useQuery(BOOK_QUERY, { variables: { bookId: match.params.id } });
  return (
    <main>
      { loading && <LinearProgress /> }
      <Container sx={{ py: 8 }} maxWidth="md">
        { error && <Alert severity="error">An error occurred while retrieving your book.</Alert>}
        { !loading && !error &&
          <>
            <Link href="/books"><div style={{ display: 'flex', alignItems: 'center' }}><ArrowBackIosIcon sx={{ fontSize: '1em' }} /><Typography><FormattedMessage id="navigation.back" /></Typography></div></Link>
            <Card>
              <CardContent>
                {data && data?.book
                  ? (<BookComponent book={data.book} />)
                  : (<Typography><FormattedMessage id="book.notFound" /></Typography>)
                }
              </CardContent>
            </Card>
          </>
        }
      </Container>
    </main>
  );
};

export default Book;
