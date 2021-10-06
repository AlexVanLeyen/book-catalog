import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';

const mocks = {
  Query: () => ({
    books: () => [...new Array(6)]
  }),
  Book: () => ({
    id: () => 'z23e35',
    title: () => 'Love and Peace',
    year: () => 1982,
    description: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper finibus augue, id suscipit est vestibulum quis. Praesent pharetra egestas tincidunt. Sed fringilla tristique urna, ac ullamcorper orci suscipit ac. Donec vitae elementum est. Duis semper neque vitae pulvinar pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porttitor fringilla felis, id imperdiet urna gravida eu. Donec mattis erat a est iaculis gravida. In mi lectus, condimentum et orci sit amet, consectetur ullamcorper massa. Phasellus tincidunt egestas quam. Nunc non risus elit. Nunc pharetra leo eget eros eleifend tincidunt. Ut elementum dolor nunc, non cursus dolor consectetur nec. Ut convallis a nibh id dictum. Fusce aliquam elit ac rutrum lacinia.'
  })
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    Server is Running!
    Listening on port 4000
  `);
});
