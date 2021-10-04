import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import books from '../books.data.json';

const schema = buildSchema(`
  type Book {
    id: String
    title: String
    year: Int
    description: String
  }

  type Query {
    books: [Book]!
    book(id: String!): Book
  }
`);

const root = {
  book: (id: string) => {
    return books.find(book => book.id === id);
  },
  books: () => {
    return books;
  }
};

const app = express();
const port = 4000;

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(port, () => {
  return console.log(`Running GraphQL API server @ http://localhost:${port}/graphql`);
}).on('error', err => console.error(err));
