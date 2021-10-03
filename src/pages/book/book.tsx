import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import { useStore } from '../../stores/BookCatalogStore';

type TParams = { id: string };

const Book: React.FunctionComponent<RouteComponentProps<TParams>> = observer(({ match }) => {
  const store = useStore();
  const book = store.books.find((book) => book.id === match.params.id);

  return book
    ? (<div>
        <h1>{book.title}</h1>
        <p><Typography><FormattedMessage id="book.publishedIn" /> {book.year}</Typography></p>
        <p>{book.description}</p>
      </div>)
    : (<div><Typography><FormattedMessage id="book.notFound" /></Typography></div>);
});

export default Book;
