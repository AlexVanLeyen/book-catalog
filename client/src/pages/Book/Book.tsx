import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useStore } from '../../stores/BookCatalogStore';

type TParams = { id: string };

const Book: React.FunctionComponent<RouteComponentProps<TParams>> = observer(({ match }) => {
  const store = useStore();
  const book = store.books.find((book) => book.id === match.params.id);

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Link href="/books"><div style={{ display: 'flex', alignItems: 'center' }}><ArrowBackIosIcon sx={{ fontSize: '1em' }} /><Typography><FormattedMessage id="navigation.back" /></Typography></div></Link>
        {book
          ? (<div>
            <Typography variant="h1">{book.title}</Typography>
            <Typography variant="body2"><FormattedMessage id="book.publishedIn" /> {book.year}</Typography>
            <Divider sx={{ p: 2 }}/>
            <Typography variant="body1">{book.description}</Typography>
          </div>)
          : (<div><Typography><FormattedMessage id="book.notFound" /></Typography></div>)
        }
      </Container>
    </main>
  );
});

export default Book;
