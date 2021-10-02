import React from 'react';
import {
  RouteComponentProps
} from 'react-router-dom';

type TParams = { id: string };

const Book: React.FunctionComponent<RouteComponentProps<TParams>> = ({ match }) => {
  return (
    <div><h1>Book ID: {match.params.id}</h1></div>
  );
};

export default Book;
