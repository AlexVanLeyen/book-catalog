import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useQuery, gql } from '@apollo/client';

type TParams = { id: string };

export const BOOK = gql`
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
  const { data } = useQuery(BOOK, { variables: { bookId: match.params.id } });
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Link href="/books"><div style={{ display: 'flex', alignItems: 'center' }}><ArrowBackIosIcon sx={{ fontSize: '1em' }} /><Typography><FormattedMessage id="navigation.back" /></Typography></div></Link>
        {data && data?.book
          ? (<div>
            <Typography variant="h1">{data.book.title}</Typography>
            <Typography variant="body2"><FormattedMessage id="book.publishedIn" /> {data.book.year}</Typography>
            <Divider sx={{ p: 2 }}/>
            <Typography variant="body1">{data.book.description}</Typography>
          </div>)
          : (<div><Typography><FormattedMessage id="book.notFound" /></Typography></div>)
        }
      </Container>
    </main>
  );
};

export default Book;
