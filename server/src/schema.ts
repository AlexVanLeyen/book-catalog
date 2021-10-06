import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {

    "Provides a catalog of books"
    books: [Book!]!

    "Allows you to retrieve a specific book from the catalog"
    book(id: String!): Book
  }

  type Book {
    id: String
    title: String
    year: Int
    description: String
  }
`;

export default typeDefs;
