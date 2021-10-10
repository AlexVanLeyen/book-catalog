import { datatype, lorem, date } from 'faker';

const mocks = {
  Query: () => ({
    books: () => [...new Array(10)]
  }),
  Book: () => ({
    id: () => datatype.uuid(),
    title: () => lorem.words(3),
    year: () => date.past(30).getFullYear(),
    description: () => lorem.paragraph()
  })
};

export default mocks;
